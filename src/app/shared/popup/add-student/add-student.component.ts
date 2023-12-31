import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from '../../service/api.service';
import { GeneralService } from '../../service/general.service';
import { ProfileService } from '../../service/profile.service';
import { api_constants } from '../../constants/api-constants';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  private unsubscribe = new Subject<void>();
  studentForm: any = FormGroup
  button_loader: boolean=false
  selected_course:any
  batches:any
  constructor(
    public _dialogRef: MatDialogRef<AddStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _form_builder: FormBuilder,
    private _apiService: ApiService,
    private _generalService: GeneralService,
    private _profileService: ProfileService,
    private _toaster:ToastrService
    ) {
      this.studentForm = this._form_builder.group({
        email: [null, Validators.compose([Validators.required, Validators.email])],
        name: [null, Validators.required],
        course:[null, Validators.required],
        phone: [null, Validators.required],
        dob: [null, Validators.required],
        batch :[null, Validators.required],
      })
     }

     get f() {
      return this.studentForm.controls;
    }
  

  ngOnInit(): void {
    if(this.data){
      this.studentForm.patchValue({
        email: this.data?.email,
        name: this.data?.name,
        course:this.data?.course,
        phone: this.data?.phone,
        dob: this.data?.dob,
      })
    }
    this.getBatches()
  }

  getBatches() {
    let $this = this
    this._apiService
      .ExecuteGet(this._apiService.baseUrl + api_constants.getBatchList)
      .subscribe({
        next(response: any) {
          $this.batches=response?.result?.data
        },
        error(err) {
        },
      })
  }

  addStudent(data: any) {
    this.button_loader = true
    let body={
      name:data?.name,
      email:data?.email,
      mobile_no: data?.phone,
      course: data?.course,
      batch:data?.batch,
      dob: data?.dob
    }
    let $this = this
    this._apiService.ExecutePost(this._apiService.baseUrl + api_constants.inviteStudent, body)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next(response:any) {
          $this._toaster.success("success")
          $this.button_loader = false
          $this._dialogRef.close()
        }, error(err:any) {
          console.log(err)
          $this._toaster.error(err)
          $this.button_loader = false
        },
      })
  }

  onCourseSelect() {
    console.log(this.studentForm.value); // You can access the selected value here
  }

}
