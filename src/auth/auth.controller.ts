/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signUpDto } from './dto/signUp.dto';
import { loginDto } from './dto/login-dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    // sign Up
    @Post('signUp')
    async signUp(
        @Body() sign
    ) {
        const {firstName, lastName, phone,email,password }= JSON.parse(sign.body)
        // console.log({firstName, lastName, phone,email,password });
        return await this.authService.signUp(
            {
                firstName,
                lastName,
                phone,
                email,
                password
            }
        );
    }

    // sign In
    @Post('signIn')
    async signIn(
        @Body() login
    ) {
        const {email,password }= JSON.parse(login.body)
        return await this.authService.signIn(
            {
                email,
                password
            }
        );
    }
}
