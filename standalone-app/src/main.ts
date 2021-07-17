import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const controller = <AppController>app.select(AppModule).get(AppController);
  console.log(controller.getHello());
  app.listen(3000);

  const app2 = await NestFactory.createApplicationContext(AppModule);
  const controller2 = <AppController>app2.select(AppModule).get(AppController);
  console.log(controller2.getHello());
}
bootstrap();
