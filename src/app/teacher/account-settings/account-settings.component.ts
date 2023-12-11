import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  teacherDetailForm: any = FormGroup
  data:any
  teacher_id:any
  private _toster: any;
  constructor(
    private _router:Router,
    private apiService: ApiService,
    private _general: GeneralService,
    private _profile:ProfileService,
  private _form_builder: FormBuilder,
  ) {
  this.teacherDetailForm = this._form_builder.group({
    name: [null, Validators.required],
    phone: [null, Validators.required],
    about: [null, Validators.required],
    gender: [null, Validators.required],
    course: [null, Validators.required],
    address: [null, Validators.required],
  
  })
}
get f() {
  return this.teacherDetailForm.controls;
}

  ngOnInit(): void {
    this.data = this._general?.getUser
    this.getUser()
  }

  getUser() {
    let query = new HttpParams();
    query = query.set('id',this.data?._id );
    let $this = this
    this.apiService
      .ExecuteGet(this.apiService.baseUrl + api_constants.getTeacherDetail,"",query)
      .subscribe({
        next(response: any) {
          $this.data=response?.result
          $this.setData(response?.result)
        },
        error(err) {
        },
      })
  }
  
setData(data:any){
  this.teacherDetailForm.patchValue({
    name: data?.name,
    phone: data?.mobile_no,
    about: data?.about,
    gender: data?.gender,
    course: data?.course,
    address: data?.address,
  })
  }
  
  update(data:any){
    let body={
      name: data?.name,
      mobile_no: data?.phone,
      about: data?.about,
      gender: data?.gender,
      course: data?.course,
      address: data?.address,
    }
    let query = new HttpParams();
      query = query.set('id',this.data?._id );
      let $this = this
      this.apiService
        .ExecutePatch(this.apiService.baseUrl + api_constants.teacherrofileUpdate,body,"",query)
        .subscribe({
          next(response: any) {
            $this._toster.success("success")
          },
          error(err) {
            $this._toster.error("error")
          },
        })
  }
  nameProfileImg(name: string) {
    console.log("dfcgh",name)
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