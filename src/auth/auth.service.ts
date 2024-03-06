/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthModule } from './auth.module';
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/auth.schema';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { signUpDto } from './dto/signUp.dto';
import { loginDto } from './dto/login-dto';

@Injectable()
export class AuthService {

    constructor(
        @InjectModel(User.name)
        private authModel: mongoose.Model<AuthModule>,
        private jwtService: JwtService
    ) { }

    async signUp(sign: signUpDto): Promise<{ token: string }> {
        const { firstName, lastName, phone, email, password } = sign;
        // hashage de mot de passe 
        const hashPassword = await bcrypt.hash(password, 10);

        const user = await this.authModel.create({
            firstName,
            lastName,
            phone,
            email,
            password: hashPassword
        });

        const token = this.jwtService.sign({ id: user._id })

        return { token };
    }

    async signIn(login: loginDto){
        const { email, password } = login;
        let response = false;
        let token_response = '';

        const user = await this.authModel.findOne({ email }) as loginDto;
        if (!user) {
            // throw new UnauthorizedException('User not found please register before')
            return {error: 'User not found please register before'}
        }
        // controle des mots de passes
        await bcrypt.compare(password,user.password)
        .then((result) => {
            response = result
            console.log(result);
            if (result) {
                const token = this.jwtService.sign({ id: user._id })
                token_response = token
            } else {
                console.log('Password or Email is wrong');
            }
        })
        return response ? { token_response, response } : { token_response, response };
    }
}
