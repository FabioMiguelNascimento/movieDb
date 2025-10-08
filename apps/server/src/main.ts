import { NestFactory } from '@nestjs/core';
import 'dotenv/config';
import { env } from '../schemas/env.schema';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api')

  await app.listen(env.PORT);
}
bootstrap();