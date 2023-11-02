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
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.scss']
})
export class AddExamComponent {
  private unsubscribe = new Subject<void>();
  studentForm: any = FormGroup
  button_loader: boolean=false
  constructor(
    public _dialogRef: MatDialogRef<AddExamComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _form_builder: FormBuilder,
    private _apiService: ApiService,
    private _generalService: GeneralService,
    private _profileService: ProfileService,
    private _toaster:ToastrService
    ) {
      this.studentForm = this._form_builder.group({
        name: [null, Validators.required],
        batch: [null, Validators.required],
        description: [null, Validators.required],
        start_date:[null, Validators.required],
        end_date:[null, Validators.required],
      })
     }

     get f() {
      return this.studentForm.controls;
    }
  

  ngOnInit(): void {
  }

  addStudent(data: any) {
    this.button_loader = true
    let body={
      name:data?.name,
      batch: data?.batch,
      description: data?.description,
      start_date:data?.start_date,
      end_date:data?.end_date
    }
    let $this = this
    this._apiService.ExecutePost(this._apiService.baseUrl + api_constants.createExam, body)
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

}
