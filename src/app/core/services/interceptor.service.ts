import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class HttpConfigService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const Token = 'edaabc2dd028f5752722dde070b21aa3c24577714fe3beebeacf12a84404e1a2';

    let request = req.clone({
      setHeaders: {
        Authorization: `Bearer ${Token}`
      }
    });

    return next.handle(request);
  }
}

export const InterceptorProvider: Provider = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpConfigService, multi: true }
]
