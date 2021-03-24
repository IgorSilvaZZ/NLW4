import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepository';

class UserController{

    async create(req: Request, res: Response){

        const { name, email } = req.body;

        const userRepository = getCustomRepository(UserRepository);

        const userAlredyExists = await userRepository.findOne({ email });

        if(userAlredyExists){
            return res.status(400).send({ error: "User Already Exists" })
        }

        const user = userRepository.create({
            name,
            email
        })

        await userRepository.save(user);

        return res.status(201).json(user);

    }

}

export { UserController }