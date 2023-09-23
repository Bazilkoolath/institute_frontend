import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { GeneralService } from '../service/general.service';
import { environment } from 'src/environments/environment';
import { ProfileService } from '../service/profile.service';
import { AuthComponent } from 'src/app/auth/auth.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private _general: GeneralService,
    private _profile: ProfileService,
    private _dialog: MatDialog
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // if (request.headers.get('Skip')) {
    //   const newHeaders = request.headers.delete('Skip')
    //   const newRequest = request.clone({ headers: newHeaders });
    //   return next.handle(newRequest);
    // }
    // else 
    if (this._general.getAccessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + this._general.getAccessToken,
        }
      });
    }
    // this.checkTokenValidation()
    return next.handle(request)
      .pipe(
        catchError(err => {
          console.log('intercept err', err)
          if (err?.error?.detail === "token validation failed Token is expired" && window.location.pathname != "/verify") {
            this._profile.logout(false)
            this._profile.setLoaderStatus(false)
            this.toLogin()
          }
          const error = err.statusText;
          return throwError(err);
        })
      );
  }

  toLogin() {
    let dialogRef = this._dialog.open(AuthComponent, {
      width: '370px',
      panelClass: "padding-less-popup"
    });
  }

  checkTokenValidation() {
    let expiryTime = this._general.getTokenExpiryTime
    if (expiryTime) {
      let current_time = new Date()
      let token_expiry_time = new Date(expiryTime)
      if (current_time.getTime() < token_expiry_time.getTime()) {
       return // token not expired
      }else{
      // call refresh token (token expired)
      }
    }
  }

}