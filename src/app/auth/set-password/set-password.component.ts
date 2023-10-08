import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { api_constants } from 'src/app/shared/constants/api-constants';
import { ApiService } from 'src/app/shared/service/api.service';
import { GeneralService } from 'src/app/shared/service/general.service';
import { ProfileService } from 'src/app/shared/service/profile.service';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent {

  private unsubscribe = new Subject<void>();
  setPasswordForm: any = FormGroup
  toggle_icon: boolean = false
  button_loader: boolean = false
  submited: boolean = false
  email:any
  userId:any
  constructor(
    private _form_builder: FormBuilder,
    private _router: Router,
    private _apiService: ApiService,
    private _generalService: GeneralService,
    private _profileService: ProfileService,
    private _activatedRoute: ActivatedRoute,
  ) {
    this.setPasswordForm = this._form_builder.group({
      password: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      confirmpassword: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
    })
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params:any)=>{
      this.userId=params.id
    })
    this._activatedRoute.queryParams.subscribe((params:any)=>{
      this.email=params.email
    })
  }

  get f() {
    return this.setPasswordForm.controls;
  }

  changePasswordView() {
    this.toggle_icon = !this.toggle_icon
  }

  setPassword(data: any) {
    this.button_loader = true
    if(data?.password!=data.confirmpassword){
      alert("enter correct confirm password")
      return
    }
   let body={
    email:this.email,
    password:data.password
   }
    let $this = this
    this._apiService.ExecutePatch(this._apiService.baseUrl + api_constants.setPassword + this.userId, body)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next(response:any) {
          $this._router.navigateByUrl('login')
          // $this.button_loader = false
        }, error(err:any) {
          console.log(err)
          $this.button_loader = false
        },
      })
    this._router.navigateByUrl('/')
  }
}
