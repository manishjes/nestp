import { IsEmail, IsNotEmpty, isEmail } from "class-validator";

export class AuthSignupDto {
   @IsEmail()
   email:string

    @IsNotEmpty()
    password:string
}