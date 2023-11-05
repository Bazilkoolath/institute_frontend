import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from '../../service/api.service';
import { ProfileService } from '../../service/profile.service';
import { GeneralService } from '../../service/general.service';
import { ToastrService } from 'ngx-toastr';
import { api_constants } from '../../constants/api-constants';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.scss']
})
export class AddAnnouncementComponent {
  private unsubscribe = new Subject<void>();
  announcementForm: any = FormGroup
  button_loader: boolean = false
  constructor(
    public _dialogRef: MatDialogRef<AddAnnouncementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _form_builder: FormBuilder,
    private _apiService: ApiService,
    private _generalService: GeneralService,
    private _profileService: ProfileService,
    private _toaster:ToastrService
    
    ) {
    this.announcementForm = this._form_builder.group({
      title: [null, Validators.compose([Validators.required, Validators.email])],
      date: [null, Validators.required],
      message: [null, Validators.required],
      URL: [null, Validators.required],
    })
  }
  get f() {
    return this.announcementForm.controls;
  }
  ngOnInit(): void {
  }

  addAnnouncement(data: any) {
    this.button_loader = true
    let body={
      title:data?.title,
      date: data?.date,
      text_area:data?.text_area,
      URL: data?.URL,
      
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