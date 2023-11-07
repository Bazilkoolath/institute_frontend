import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { api_constants } from 'src/app/shared/constants/api-constants';
import { Role } from 'src/app/shared/constants/enum';
import { ApiService } from 'src/app/shared/service/api.service';
import { GeneralService } from 'src/app/shared/service/general.service';
import { ProfileService } from 'src/app/shared/service/profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private unsubscribe = new Subject<void>();
  loginForm: any = FormGroup
  toggle_icon: boolean = false
  button_loader: boolean = false
  submited: boolean = false
  constructor(
    private _form_builder: FormBuilder,
    private _router: Router,
    private _apiService: ApiService,
    private _generalService: GeneralService,
    private _profileService: ProfileService,
    private _toasterService:ToastrService
  ) {
    this.loginForm = this._form_builder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.compose([Validators.required])],
    })
  }

  ngOnInit(): void {
  }

  get f() {
    return this.loginForm.controls;
  }

  changePasswordView() {
    this.toggle_icon = !this.toggle_icon
  }

  login(data: any) {
    this.button_loader = true
    let body={
      email:data?.email,
      password:data?.password,
    }
    console.log(body)
    let $this = this
    this._apiService.ExecutePost(this._apiService.baseUrl + api_constants.login, body)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next(response:any) {
          console.log(response)
          $this._generalService.setAccessToken=response?.result?.profile_id
          $this._generalService.setRole=response?.result?.role
          $this._profileService.getUser(response?.result?.role)
      
          // $this.button_loader = false
        }, error(err:any) {
          // console.log("error",err)
          $this._toasterService.error(err?.error?.message)
          $this.button_loader = false
        },
      })
  }




}

