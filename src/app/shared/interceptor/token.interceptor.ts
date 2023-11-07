import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralService } from '../service/general.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private _general:GeneralService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this._general.getAccessToken) {
      const modified = request.clone({
        setHeaders: {
          Authorization: this._general.getAccessToken,
          profile_id: this._general.getAccessToken, // Ensure this is the intended value
          role: this._general.getRole,
          // course: this._general.getUser.course,
        }
      });


      return next.handle(modified);
    } else {
      return next.handle(request);
    }
  }
}
        