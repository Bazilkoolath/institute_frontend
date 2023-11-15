import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { AddBatchComponent } from '../add-batch/add-batch.component';
import { ProfileService } from '../../service/profile.service';
import { ApiService } from '../../service/api.service';
import { GeneralService } from '../../service/general.service';
import { ToastrService } from 'ngx-toastr';
import { api_constants } from '../../constants/api-constants';

@Component({
  selector: 'app-add-result',
  templateUrl: './add-result.component.html',
  styleUrls: ['./add-result.component.scss']
})
export class AddResultComponent {
  private unsubscribe = new Subject<void>();
  button_loader: boolean = false
  students:any[]=[]
  course:any
  constructor(
    public _dialogRef: MatDialogRef<AddBatchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _form_builder: FormBuilder,
    private _apiService: ApiService,
    private _generalService: GeneralService,
    private _profileService: ProfileService,
    private _toaster: ToastrService
  ) {
  }


  ngOnInit(): void {
    this.getStudents()
  }

  getStudents() {
    let $this = this
    this._apiService
      .ExecuteGet(this._apiService.baseUrl + api_constants.getStudentList)
      .subscribe({
        next(response: any) {
          $this.students=response?.result?.data
        },
        error(err) {
        },
      })
  }

  addResult() {
    this.button_loader = true
    let body = {
      // student_id: data?.student_id,
      // course: data?.course,
      // pont: data?.point
    }
    let $this = this
    this._apiService.ExecutePost(this._apiService.baseUrl, body)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next(response: any) {
          $this._toaster.success("success")
          $this.button_loader = false
          $this._dialogRef.close()
        }, error(err: any) {
          console.log(err)
          $this._toaster.error(err)
          $this.button_loader = false
        },
      })
  }

  nameProfileImg(name: string) {
    let spaceIndex = 0
    if (name?.includes(" ")) {
      spaceIndex = name?.indexOf(" ")
    }
    if (spaceIndex > 1) {
      return name.slice(0, 1).toUpperCase() + name.slice(spaceIndex + 1, spaceIndex + 2).toUpperCase() || name.slice(1, 2).toUpperCase()
    } else {
      return name?.slice(0, 2).toUpperCase()
    }
  }

}
