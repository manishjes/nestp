import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
bootstrap();



// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   // Enable CORS
//   const corsOptions: CorsOptions = {
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   };
//   app.enableCors(corsOptions);

//   await app.listen(3001);
// }

// bootstrap();