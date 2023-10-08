import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  ) {
    this.loginForm = this._form_builder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
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
    let $this = this
    this._apiService.ExecutePost(this._apiService.baseUrl + api_constants.login, body)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next(response:any) {
          $this._generalService.setAccessToken=response?.result?.profile_id
          if(response?.result?.role==Role.USER){
          $this._profileService.getUser(data?.email, true)
        }else if(response?.result?.role==Role.ADMIN){
          $this._profileService.getAdmin(data?.email, true)
        }else if(response?.result?.role==Role.TEACHER){
          $this._profileService.getTeacher(data?.email, true)
        }else{
           return
        }
          // $this.button_loader = false
        }, error(err:any) {
          console.log(err)
          $this.button_loader = false
        },
      })
    this._router.navigateByUrl('/student')
  }




}

