import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { AddBatchComponent } from '../add-batch/add-batch.component';
import { ProfileService } from '../../service/profile.service';
import { ApiService } from '../../service/api.service';
import { GeneralService } from '../../service/general.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-result',
  templateUrl: './add-result.component.html',
  styleUrls: ['./add-result.component.scss']
})
export class AddResultComponent {
  private unsubscribe = new Subject<void>();
  resultForm: any = FormGroup
  button_loader: boolean=false
  constructor(
    public _dialogRef: MatDialogRef<AddBatchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _form_builder: FormBuilder,
    private _apiService: ApiService,
    private _generalService: GeneralService,
    private _profileService: ProfileService,
    private _toaster:ToastrService
    ) {
      this.resultForm = this._form_builder.group({
        student_id: [null, Validators.required],
        course: [null, Validators.required],
        point:[null, Validators.required],
      })
     }

     get f() {
      return this.resultForm.controls;
    }
  

  ngOnInit(): void {
  }

  addResult(data: any) {
    this.button_loader = true
    let body={
      student_id:data?.student_id,
      course: data?.course,
      pont:data?.point
    }
    let $this = this
    this._apiService.ExecutePost(this._apiService.baseUrl, body)
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
