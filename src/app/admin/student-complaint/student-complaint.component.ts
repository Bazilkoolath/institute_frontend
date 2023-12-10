import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { api_constants } from 'src/app/shared/constants/api-constants';
import { UserStatus } from 'src/app/shared/constants/enum';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-student-complaint',
  templateUrl: './student-complaint.component.html',
  styleUrls: ['./student-complaint.component.scss']
})
export class StudentComplaintComponent {
  user_status=UserStatus
  complaint:any=[]
  complaintForm: any = FormGroup
  button_loader: boolean = false
  constructor(
    private _form_builder: FormBuilder,
    private _dialog:MatDialog,
    private _router:Router,
    private apiService: ApiService,
    private _toster:ToastrService
) {
  this.complaintForm = this._form_builder.group({
    response: [null, Validators.required],
  })
 }

ngOnInit(): void {
  this.getComplaints()
}


getComplaints() {
  let $this = this
  this.apiService
    .ExecuteGet(this.apiService.baseUrl+api_constants.getComplaintLst)
    .subscribe({
      next(response: any) {
        $this.complaint=response?.result?.data
        $this.complaintForm.patch({
          response:$this.complaint.response
        })
      },
      error(err) {
      },
    })
}

update(data:any,item:any){
  let body={
    subject:item?.title,
    message:item?.message,
    student_id:item.student_id,
    student_name:item.student_name,
    response:data?.response
  }
    let $this = this
    this.apiService
      .ExecutePatch(this.apiService.baseUrl + api_constants.updateComplaint,body)
      .subscribe({
        next(response: any) {
          $this._toster.success("success")
        },
        error(err) {
          $this._toster.error("error")
        },
      })
}
}
