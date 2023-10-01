import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
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
  constructor(
    private _form_builder: FormBuilder,
    private _router: Router,
    private _apiService: ApiService,
    private _generalService: GeneralService,
    private _profileService: ProfileService,
  ) {
    this.setPasswordForm = this._form_builder.group({
      password: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      confirmpassword: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
    })
  }

  ngOnInit(): void {
  }

  get f() {
    return this.setPasswordForm.controls;
  }

  changePasswordView() {
    this.toggle_icon = !this.toggle_icon
  }

  setPassword(data: any) {
    // this.button_loader = true
    // const formData = new FormData();
    // formData.append("email", data?.email);
    // formData.append("password", data?.password);
    // let $this = this
    // this._apiService.ExecutePost(this._apiService.baseUrl + api_constants.login, formData)
    //   .pipe(takeUntil(this.unsubscribe))
    //   .subscribe({
    //     next(response:any) {
    //       $this._generalService.setAccessToken=response?.access_token
    //       $this._profileService.getProfileData(data?.email, true)
    //       // $this.button_loader = false
    //     }, error(err:any) {
    //       console.log(err)
    //       $this.button_loader = false
    //     },
    //   })
    this._router.navigateByUrl('/')
  }
}
