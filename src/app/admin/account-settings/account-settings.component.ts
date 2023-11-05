import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { api_constants } from 'src/app/shared/constants/api-constants';
import { ApiService } from 'src/app/shared/service/api.service';
import { GeneralService } from 'src/app/shared/service/general.service';
import { ProfileService } from 'src/app/shared/service/profile.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent {
  
  userDetailForm: any = FormGroup
  data:any
  student_id:any
  constructor(
    private _router:Router,
    private apiService: ApiService,
    private _general: GeneralService,
    private _profile:ProfileService,
  private _form_builder: FormBuilder,
  ) {
  this.userDetailForm = this._form_builder.group({
    email: [null, Validators.compose([Validators.required, Validators.email])],
    name: [null, Validators.required],
    phone: [null, Validators.required],
    about: [null, Validators.required],
    gender: [null, Validators.required],
    course: [null, Validators.required],
    address: [null, Validators.required],
    status: [null, Validators.required],
  })
}
get f() {
  return this.userDetailForm.controls;
}

  ngOnInit(): void {
    this.data = this._general?.getUser
    let $this = this
    this._profile.profileData
    .subscribe({
      next(value) {
        console.log("user",value)
        if (value) {
          console.log("user",value)
          $this.data = value
        }
      },
    })
  }

  getStudent() {
    let query = new HttpParams();
    query = query.set('id',this.student_id );
    let $this = this
    this.apiService
      .ExecuteGet(this.apiService.baseUrl + api_constants.getTeacherDetail,"",query)
      .subscribe({
        next(response: any) {
          $this.data=response?.result
        },
        error(err) {
        },
      })
  }
  nameProfileImg(name: string) {
    let spaceIndex =0
    if(name?.includes(" ")){
      spaceIndex = name?.indexOf(" ")
    }
    if (spaceIndex > 1) {
      return name.slice(0, 1).toUpperCase() + name.slice(spaceIndex + 1, spaceIndex + 2).toUpperCase() || name.slice(1, 2).toUpperCase()
    } else {
      return name?.slice(0, 2).toUpperCase()
    }
  }
}
