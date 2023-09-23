import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, filter, Observable, Subject, takeUntil } from 'rxjs';
import { ApiService } from './api.service';
import { Role } from '../constants/enum';
import { GeneralService } from './general.service';
import { api_constants } from '../constants/api-constants';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
declare var pendo: any;

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private unsubscribe = new Subject<void>();
  profileData: BehaviorSubject<any> = new BehaviorSubject(null);
  currentUser$: Observable<any> = this.profileData.asObservable().pipe(
    filter(value => Boolean(value))
  );

  private changeLoaderStatus=new BehaviorSubject(false)
  currentLoaderStatus=this.changeLoaderStatus.asObservable();
  constructor(
    private apiService: ApiService,
    private router: Router,
    private _generalService: GeneralService,
    private _dialog: MatDialog,
    private _toaster: ToastrService,
  ) { }


  getProfileData(email: string, isRedirect?: boolean, signInWithSocial?: boolean) {
    this.changeLoaderStatus.next(true)
    let $this = this
    this.apiService
      .ExecuteGet(this.apiService.baseUrl + api_constants.getUserDetail)
      .subscribe({
        next(response: any) {
          $this.profileData.next(response);
          $this._generalService.setUser = response
          $this.changeLoaderStatus.next(false)
          if(environment.production){
          pendo.initialize({
            account: {
              id: email,
              name: response?.contact?.contact_person,
            }
          })
        }
        },
        error(err) {
          if(window?.location?.pathname!="/verify"){
            $this.logout(false)
          }
          $this.changeLoaderStatus.next(false)
        },
      })
  }

  loginSocialMedia(code: any) {
    this.changeLoaderStatus.next(true)
    const formData = new FormData();
    formData.append("code", code);
    let $this = this
    this.apiService.ExecutePost(this.apiService.baseUrl + api_constants.get_access_token, formData)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next(response: any) {
          $this._generalService.setAccessToken = response?.access_token
          $this.getProfileData("")
        }, error(err: any) {
        },
      })
  }

  // userDetail() {
  //   let dialogRef = this._dialog.open(UserProfileComponent, {
  //     width: '400px',
  //     height: '100%',
  //     data: {
  //       edit: true
  //     },
  //     position: {
  //       top: '0px',
  //       right: '0px',
  //     },
  //     enterAnimationDuration: '500ms',
  //     direction: 'ltr',
  //     panelClass: "side-popup"
  //   });
  // }

  logout(saveCart?:boolean) {
  //   if(saveCart){
  //   this._cartService.saveCartToDB(true)
  // }
  //   this.profileData.next(null);   
  //   this._generalService.logOut()
    // window.location.href=`https://${environment.cognito.oauth.domain}/logout?client_id=${environment.cognito.userPoolWebClientId}&logout_uri=${environment.cognito.oauth.redirectSignOut}`
  }

  setLoaderStatus(status:boolean){
    this.changeLoaderStatus.next(status)
  }
}
