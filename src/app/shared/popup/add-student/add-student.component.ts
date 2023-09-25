import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from '../../service/api.service';
import { GeneralService } from '../../service/general.service';
import { ProfileService } from '../../service/profile.service';
import { api_constants } from '../../constants/api-constants';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  private unsubscribe = new Subject<void>();
  loginForm: any = FormGroup
  button_loader: boolean=false
  constructor(
    public _dialogRef: MatDialogRef<AddStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _form_builder: FormBuilder,
    private _apiService: ApiService,
    private _generalService: GeneralService,
    private _profileService: ProfileService,) {
      this.loginForm = this._form_builder.group({
        email: [null, Validators.compose([Validators.required, Validators.email])],
        password: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      })
     }

  ngOnInit(): void {
  }
  login(data: any) {
    this.button_loader = true
    const formData = new FormData();
    formData.append("email", data?.email);
    formData.append("password", data?.password);
    let $this = this
    this._apiService.ExecutePost(this._apiService.baseUrl + api_constants.login, formData)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next(response:any) {
          // $this._profileService.getProfileData(data?.email, true)
          // $this.button_loader = false
          // $this._dialogRef.close()
        }, error(err:any) {
          console.log(err)
          // $this._toaster.error(err?.error?.detail)
          $this.button_loader = false
        },
      })
  }

}
