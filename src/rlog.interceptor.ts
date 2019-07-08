import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Scope, Inject } from '@nestjs/common';
import { Observable } from 'rxjs';

export class RlogInterceptor implements NestInterceptor {
  constructor(
    private readonly value: any,
  ) {
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('RLOG HIT', this.value);
    return next.handle();
  }
}
