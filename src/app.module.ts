import { Module } from '@nestjs/common';
import { REQUEST, APP_INTERCEPTOR } from '@nestjs/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RlogInterceptor } from './rlog.interceptor';
import { FactoryProvider, Scope } from '@nestjs/common/interfaces';

const rlog: FactoryProvider = {
  provide: APP_INTERCEPTOR,
  scope: Scope.REQUEST,
  inject: [AppService],
  useFactory: (appService: AppService) => {
    console.log('rLog hit', appService);
    return new RlogInterceptor('foo');
  },
};

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, rlog],
})
export class AppModule {}
