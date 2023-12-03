import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from '../../service/api.service';
import { GeneralService } from '../../service/general.service';
import { ProfileService } from '../../service/profile.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.scss']
})
export class AddComplaintComponent {
  private unsubscribe = new Subject<void>();
  complaintForm: any = FormGroup
  button_loader: boolean = false
  constructor(
    public _dialogRef: MatDialogRef<AddComplaintComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _form_builder: FormBuilder,
    private _apiService: ApiService,
    private _generalService: GeneralService,
    private _profileService: ProfileService,
    private _toaster:ToastrService
    
    ) {
    this.complaintForm = this._form_builder.group({
      title: [null, Validators.required],
      message: [null, Validators.required],
    })
  }
  get f() {
    return this.complaintForm.controls;
  }
  ngOnInit(): void {
  }

  addComplaint(data: any) {
    this.button_loader = true
    let body={
      subject:data?.title,
      message:data?.message,
      url: data?.url,
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
