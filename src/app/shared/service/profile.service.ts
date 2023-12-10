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
import { ToastrService } from 'ngx-toastr';
declare var pendo: any;

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private unsubscribe = new Subject<void>();
  profileData: BehaviorSubject<any> = new BehaviorSubject(null);
  currentUser: Observable<any> = this.profileData.asObservable().pipe(
    filter(value => Boolean(value))
  );
  constructor(
    private apiService: ApiService,
    private router: Router,
    private _generalService: GeneralService,
    private _dialog: MatDialog,
    private _toasterService:ToastrService
  ) { }


  getUser(role: string) {
    let $this = this
    this.apiService
      .ExecuteGet(this.apiService.baseUrl + api_constants.getUserDetail)
      .subscribe({
        next(response: any) {
          $this.profileData.next(response?.result);
          $this._generalService.setUser = response?.result
          console.log("user",$this.profileData)
          if(response?.result?.role==Role.STUDENT){
            $this.router.navigateByUrl('student/announcement')
          }else if(response?.result?.role==Role.ADMIN){
            $this.router.navigateByUrl('admin/dashboard')
          }else if(response?.result?.role==Role.TEACHER){
            $this.router.navigateByUrl('teacher/dashboard')
          }else{
             return
          }
        },
        error(err) {
          $this._toasterService.error(err?.error?.message||"login faild, enter valid credentiol")
            $this.logout()
        },
      })
  }



  logout() {
this._generalService.logOut()
  }

}
