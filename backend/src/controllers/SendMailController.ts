import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";
import { UserRepository } from "../repositories/UserRepository";
import SendMailService from "../services/SendMailService";
import { resolve } from 'path'
import { AppError } from "../errors/AppError";

class SendMailController{

    async execute(req: Request, res: Response){

        const { email, survey_id } = req.body;

        const usersRepository = getCustomRepository(UserRepository);

        const surveyRepository = getCustomRepository(SurveysRepository);

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const user = await usersRepository.findOne({ email });

        if(!user){
            throw new AppError("User does not exists");
            /* return res.status(400).json({ error: "User does not exists" }) */
        }

        const survey = await surveyRepository.findOne({ id: survey_id });

        if(!survey){
            throw new AppError("Survey does not exists");
            /* return res.status(400).json({ error: "Survey does not exists" }) */
        }

        const npsPath = resolve(__dirname, '..', 'views', 'emails', 'npsMail.hbs');

        /* Select utilizando  OR, cada objeto sendo a condição do or, colchetes transformando isso em um OR */
        /* const surveyUserAlreadyExists = await surveysUsersRepository.findOne({ 
            where: [ { user_id: user.id }, { value: null } ] ,
            relations: [ "user", "survey" ]
        }); */

        /* Select utilizando o AND no mesmo objeto */
        const surveyUserAlreadyExists = await surveysUsersRepository.findOne({
            where: { user_id: user, value: null },
            relations: [ "user", "survey" ]
        })

        const variables = {
            name: user.name,
            title: survey.title,
            description: survey.description,
            id: "",
            link: process.env.URL_MAIL,
        }

        if(surveyUserAlreadyExists){
            variables.id = surveyUserAlreadyExists.id;
            await SendMailService.execute(email, survey.title, variables, npsPath)
            return res.json({ surveyUserAlreadyExists });
        }

        //Salvar as informações na tabela surveyUser

        const surveyUser = surveysUsersRepository.create({
            user_id: user.id,
            survey_id
        })

        await surveysUsersRepository.save(surveyUser);

        variables.id = surveyUser.id;

        //Enviar o email para o usuario
        
        await SendMailService.execute(email, survey.title, variables, npsPath);
        
        return res.json({ surveyUser });
    }

}

export { SendMailController }