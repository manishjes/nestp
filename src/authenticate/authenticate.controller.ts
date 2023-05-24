

import {  Controller, Post,Body, UseGuards, Get } from '@nestjs/common';
import { AuthenticateService } from './authenticate.service';
import { AuthLoginDto } from './auth-login.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthSignupDto } from './auth-signup.dto';


@Controller('authenticate')
export class AuthenticateController {
  constructor(private readonly authenticateService: AuthenticateService) {


 
   
  }
  @Post('/signup')
  async signup(@Body() authSignupDto: AuthSignupDto){
  return this.authenticateService.signup(authSignupDto)
}
  @Post('/login')
  async login(@Body() authLoginDto: AuthLoginDto){
  return this.authenticateService.login(authLoginDto)
}

@UseGuards(JwtAuthGuard)
@Get()
async test(){

  return "login successfull"
}
}
