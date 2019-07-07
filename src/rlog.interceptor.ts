import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Scope, Inject } from '@nestjs/common';
import { Observable } from 'rxjs';
import { REQUEST } from '@nestjs/core';

@Injectable({ scope: Scope.REQUEST })
export class RlogInterceptor implements NestInterceptor {
  constructor(
    @Inject(REQUEST) request: any,
  ) {
    throw new Error('nope');
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('REQUEST INTERCEPTOR FIRED');
    return next.handle();
  }
}
