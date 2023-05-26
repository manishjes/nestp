import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { CarModule } from './car/car.module';
import { CarcompanyModule } from './carcompany/carcompany.module';
import { AuthModule } from './auth/auth.module';
import { AuthenticateModule } from './authenticate/authenticate.module';
import { OwnerModule } from './owner/owner.module';




@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({

      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Set to false in production
    }),
    AppModule,
    UserModule,
    CarModule,
    CarcompanyModule,
    AuthModule,
    AuthenticateModule,
    OwnerModule,
    
    
    
  ], 
})
export class AppModule {}  
 