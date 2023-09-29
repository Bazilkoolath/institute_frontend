import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, filter, Observable, Subject, takeUntil } from 'rxjs';
import { ApiService } from './api.service';
import { Role } from '../constants/enum';
import { GeneralService } from './general.service';
import { api_constants } from '../constants/api-constants';
import { MatDialog } from '@angular/material/dialog';
// import { ToastrService } from 'ngx-toastr';
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
            $this.logout()
          }
          $this.changeLoaderStatus.next(false)
        },
      })
  }



  logout() {

  }

}
