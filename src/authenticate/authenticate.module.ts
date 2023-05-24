import { Module } from '@nestjs/common';
import { AuthenticateService } from './authenticate.service';
import { AuthenticateController } from './authenticate.controller';
import { AuthModule } from 'src/auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { JwtStrategy } from './jwt.strategy';
import { AuthService } from 'src/auth/auth.service';



@Module({
  imports: [
    AuthModule,
   
    PassportModule,
    JwtModule.registerAsync({
       imports: [ConfigModule],
       useFactory: async() => ({
        secret: process.env.JWT_SECRET
       }),
       inject: [ConfigService]
    })
  ],
  controllers: [AuthenticateController],
  providers: [AuthenticateService, JwtStrategy],
 
  
})
export class AuthenticateModule {}
