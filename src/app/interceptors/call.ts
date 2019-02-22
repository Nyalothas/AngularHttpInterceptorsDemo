import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class CallInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted call', req);
    if (req.url.indexOf('home') !== -1) {
      console.log('home intercepted');
      return of(new HttpResponse({ body: { a: 1 } }));
    }

    return next.handle(req);
  }

}