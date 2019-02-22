import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CallInterceptor } from './interceptors/call';
import { ApiSetterInterceptor } from './interceptors/api-setter';

// the Order matters: top to bot
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ApiSetterInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: CallInterceptor, multi: true },
];