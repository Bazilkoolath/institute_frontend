import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { first, map, Observable } from 'rxjs';
import { ProfileService } from '../service/profile.service';
import { Role } from '../constants/enum';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    private profile: ProfileService,
    private _router: Router,
    private _dialog:MatDialog
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.profile.currentUser$.pipe(
      first(),
      map((user: any) => {
        
        let user_role:any[] = []
        if (user?.contact?.is_buyer) {
          user_role.push(Role.BUYER)
        }
        if(user?.contact?.is_isv){
          user_role.push(Role.PARTNER)
        }
        if(user?.contact?.is_si){
          user_role.push(Role.SELLER)
        }else{
          this.si_login()
        }

        if (user_role.includes(next.data['role'])) {
          return true;
          
        } 
        else {
          // this.profile.getProfileData("", true);
          return false;
        }
      })
    );
  }

  si_login(){
    this._router.navigateByUrl("seller/dashboard") 
    // let dialogRef = this._dialog.open(SellerRegistrationComponent, {
    //   width: '80%',
    //   minHeight :"600px",
    //   panelClass: "padding-less-popup"
    // });
  }

}