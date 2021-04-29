import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepository';
import * as yup from 'yup';
import { AppError } from '../errors/AppError';

class UserController{

    async create(req: Request, res: Response){

        const { name, email, password } = req.body;

        const schema = yup.object().shape({
            name: yup.string().required("Nome é obrigátorio"),
            email: yup.string().email().required("Email incorreto"),
            password: yup.string().required('Senha é obrigátoria')
        })

        /* Primeira forma de validação */
        /* if(!(await schema.isValid(req.body))){
            return res.status(400).json({ error: "Validation Failed!" })
        } */

        /* Segunda forma de validação */
        try{
            await schema.validate(req.body, { abortEarly: false });
        }catch(err){
            throw new AppError(err);
        }

        const userRepository = getCustomRepository(UserRepository);

        const userAlredyExists = await userRepository.findOne({ email });

        if(userAlredyExists){
            return res.status(400).send({ error: "User Already Exists" })
        }



        const user = userRepository.create({
            name,
            email,
            password
        })

        await userRepository.save(user);

        return res.status(201).json(user);

    }

}

export { UserController }