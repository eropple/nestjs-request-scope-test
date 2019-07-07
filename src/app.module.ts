import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RlogInterceptor } from './rlog.interceptor';
import { FactoryProvider, Scope } from '@nestjs/common/interfaces';
import { REQUEST } from '@nestjs/core';

const rlog: FactoryProvider = {
  scope: Scope.REQUEST,
  inject: [REQUEST],
  provide: RlogInterceptor,
  useFactory: (request) => {
    return new RlogInterceptor(request);
  }
}

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, rlog],
})
export class AppModule {}
