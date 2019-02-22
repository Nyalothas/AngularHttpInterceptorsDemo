import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export class ApiSetterInterceptor implements HttpInterceptor {

  apiBase: string = "https://anapioficeandfire.com/api/";

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Setting request apiBase');
    const fullRequest = req.clone({
      url: this.apiBase + req.url
    })

    return next.handle(fullRequest);
  }

}