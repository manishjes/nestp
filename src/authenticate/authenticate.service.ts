import { AuthLoginDto } from './auth-login.dto';

import { JwtService } from '@nestjs/jwt';
import { AuthService } from './../auth/auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthSignupDto } from './auth-signup.dto';
import * as bcrypt from "bcryptjs"


@Injectable()
export class AuthenticateService {
   constructor(
      private authService:AuthService,
      private jwtService:JwtService
   ){}

     async signup(authSignupDto:AuthSignupDto){
        const {email, password} = authSignupDto
        //const hashPassword = await bcrypt.hash(password, 10)
        const user = await this.authService.create({
            email,
            password
        })
        return {
            message: "user signup successfully",
            user
        }
     }






    // async login(authLoginDto:AuthLoginDto){
    //     const user = await this.validateUser(authLoginDto)

    //     const payload = {
    //         userId: user.id
    //     };
    //     return{ message: 'login  successfull',
    //         access_token: this.jwtService.sign(payload)
    //     }
    // }
    // async validateUser(authLoginDto:AuthLoginDto){
    //     const { email, password}= authLoginDto;

    //     const user = await this.authService.findByEmail(email)
    //     if(!(await user?.validatePassword(password))){
    //         throw new UnauthorizedException();
        
    //     }

    //     return user

    // }

    async login(authLoginDto:AuthLoginDto){
        const { email, password} = authLoginDto

        const user = await this.authService.findByEmail(email)
         if(!user){
            throw new UnauthorizedException('Invalid email or password')
         }
         const isPasswordMatched = await bcrypt.compare(password, user.password)

        if(!isPasswordMatched){
            throw new UnauthorizedException('Invalid email or password')
        }
        const token = this.jwtService.sign({id: user.id})
        return {
              token
        }
}
}
