import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { api_constants } from 'src/app/shared/constants/api-constants';
import { ApiService } from 'src/app/shared/service/api.service';
import { GeneralService } from 'src/app/shared/service/general.service';
import { ProfileService } from 'src/app/shared/service/profile.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss']
})
export class StudentRegistrationComponent implements OnInit {
  private unsubscribe = new Subject<void>();
  signupForm: any = FormGroup
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
    this.signupForm = this._form_builder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      name: [null, Validators.required],
      phone: [null, Validators.required],
      course: [null, Validators.required],
      dob: [null, Validators.required],
    })
  }

  ngOnInit(): void {
  }

  get f() {
    return this.signupForm.controls;
  }

  changePasswordView() {
    this.toggle_icon = !this.toggle_icon
  }

  signUp(data: any) {
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
    this._router.navigateByUrl('/login')
  }




}

