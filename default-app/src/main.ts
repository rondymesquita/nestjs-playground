import { performance } from 'perf_hooks';
const startTime = performance.now();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

const endTime = performance.now() - startTime;
console.log(`Bootstrap done in ${(endTime / 1000).toFixed(3)}s`);
