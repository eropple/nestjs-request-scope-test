import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RlogInterceptor } from './rlog.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const rlog = app.get(RlogInterceptor);
  console.log(rlog);

  app.useGlobalInterceptors(rlog);

  await app.listen(3000);
}
bootstrap();
