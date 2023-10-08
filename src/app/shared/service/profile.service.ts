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
  constructor(
    private apiService: ApiService,
    private router: Router,
    private _generalService: GeneralService,
    private _dialog: MatDialog,
  ) { }


  getUser(email: string, isRedirect?: boolean) {
    let $this = this
    this.apiService
      .ExecuteGet(this.apiService.baseUrl + api_constants.getUserDetail)
      .subscribe({
        next(response: any) {
          $this.profileData.next(response);
          $this._generalService.setUser = response
          $this.router.navigateByUrl('student/dashboard')
        },
        error(err) {
            $this.logout()
        },
      })
  }

  getAdmin(email: string, isRedirect?: boolean) {
    let $this = this
    this.apiService
      .ExecuteGet(this.apiService.baseUrl + api_constants.getAdminDetail)
      .subscribe({
        next(response: any) {
          $this.profileData.next(response);
          $this._generalService.setUser = response
          $this.router.navigateByUrl('student/dashboard')
        },
        error(err) {
            $this.logout()
        },
      })
  }

  getTeacher(email: string, isRedirect?: boolean) {
    let $this = this
    this.apiService
      .ExecuteGet(this.apiService.baseUrl + api_constants.getTeacherDetail)
      .subscribe({
        next(response: any) {
          $this.profileData.next(response);
          $this._generalService.setUser = response
          $this.router.navigateByUrl('student/dashboard')
        },
        error(err) {
            $this.logout()
        },
      })
  }



  logout() {
this._generalService.logOut()
  }

}
