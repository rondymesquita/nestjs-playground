import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserAgentMiddleware } from './config/middlewares/user-agent.middleware';

import morgan from 'morgan';
import responseTime from 'response-time';
console.log(responseTime);

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(morgan('combined')).forRoutes('*');
    // consumer.apply(UserAgentMiddleware).forRoutes('*');
    consumer.apply(responseTime()).forRoutes('*');
  }
}
