import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepository';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class AuthController{

    async autenticate(req: Request, res: Response){
        const userRepository = getCustomRepository(UserRepository);

        const { email, password } = req.body;

        const user = await userRepository.findOne({ email });

        if(!user){
            return res.status(400).json({ error: "User Not Found!" });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if(!isValidPassword){
            return res.status(400).json({ error: "Password is Invalid" })
        }

        const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' })
        

        return res.status(200).json({
            user, 
            token
        })
    }

}

export { AuthController };