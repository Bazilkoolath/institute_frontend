import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthComponent } from 'src/app/auth/auth.component';
import { MatDialog } from '@angular/material/dialog';
import { GeneralService } from '../service/general.service';
import { UserProfileComponent } from '../components/user-profile/user-profile.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private general: GeneralService,
    private _dialog: MatDialog,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let token = this.general.getAccessToken;
    let user = this.general.getUser
    if (token&& user) {
      return true;
    } else if (token && !user) {
      this.userDetail()
      return false
    } else {
      this.Login()
      return false;
    }
  }

  Login() {
    let dialogRef = this._dialog.open(AuthComponent, {
      width: '370px',
      panelClass: "padding-less-popup"
    });
  }

  userDetail() {
    let dialogRef = this._dialog.open(UserProfileComponent, {
      width: '400px',
      height: '100%',
      data:{
        edit:true
      },
      position: {
        top: '0px',
        right: '0px',
      },
      enterAnimationDuration: '500ms',
      direction: 'ltr',
      panelClass: "side-popup"
    });
  }

}
