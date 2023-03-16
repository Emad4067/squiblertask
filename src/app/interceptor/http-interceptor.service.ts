/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-shadow */
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpResponse,
  HttpUserEvent,
  HttpHeaders,
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<
    | HttpSentEvent
    | HttpHeaderResponse
    | HttpProgressEvent
    | HttpResponse<any>
    | HttpUserEvent<any>
  > {
    let headers: HttpHeaders = new HttpHeaders();
    headers = req.headers.set('X-RapidAPI-Key', environment.apiKey);
    headers = headers.append('X-RapidAPI-Host', environment.apiHost);

    const newRequest = req.clone({ headers });
    // eslint-disable-next-line consistent-return
    return next.handle(newRequest).pipe(tap(() => {}));
  }
}
