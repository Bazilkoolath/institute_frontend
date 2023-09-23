import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { ProfileService } from 'src/app/shared/service/profile.service';
import { GeneralService } from '../../service/general.service';
import { ApiService } from '../../service/api.service';
import { api_constants } from '../../constants/api-constants';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ChangePasswordComponent } from 'src/app/auth/change-password/change-password.component';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userDetailForm: any = FormGroup
  companyDetailForm: any = FormGroup
  edit_user: boolean = false
  edit_company: boolean = false
  new_img: any
  user: any
  selected_image: any
  private unsubscribe = new Subject<void>();
  user_email: any;
  signInWithSocialMedia: any = false
  profileImageChanged: boolean = false
  constructor(
    private _profile: ProfileService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UserProfileComponent>,
    private FormBuilder: FormBuilder,
    private _general: GeneralService,
    private apiService: ApiService,
    private router: Router,
    private _dialog: MatDialog,
    private _toaster: ToastrService,
  ) {
    if (this.data?.edit) {
      this.edit_user = true
    } else {
      this.edit_user = false
    }
    this.user_email = this._general.getUser.contact.email
    this.userDetailForm = this.FormBuilder.group({
      email: [this.user_email, Validators.required],
      contact_person: [null, Validators.required],
      phone: [null],
      is_isv: [false],
      is_buyer: [false],
      is_si: [false],
      position_role: [null],
    })
    this.companyDetailForm = this.FormBuilder.group({
      business_email: [null, Validators.compose([Validators.required, Validators.email])],
      company_name: [null],
    })
  }

  ngOnInit(): void {
    this.getProfile()
    this.getuserDetail()
  }

  getProfile() {
    let $this = this
    this._profile.profileData
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next(value) {
          if (value) {
            $this.user = value.contact
            $this.signInWithSocialMedia = $this._general.getSigninWith
            console.log("$this.signInWithSocialMedia", $this.signInWithSocialMedia)
          }
        },
      })
  }

  getuserDetail() {
    let id: any = this._general.getUser.contact.email
    let $this = this
    this.apiService
      .ExecuteGet(this.apiService.baseUrl + api_constants.getUserDetail)
      .subscribe({
        next(response: any) {
          let data = response.contact
          $this.user = response.contact
          if (!data?.contact_person) {
            $this.edit_user = true
          }
          $this.userDetailForm.patchValue({
            email: data?.email,
            contact_person: data?.contact_person,
            phone: data?.phone,
            is_isv: data?.is_isv,
            is_buyer: data?.is_buyer,
            is_si: data?.is_si,
            position_role: data?.position_role,
          })
          $this.companyDetailForm.patchValue({
            business_email: data?.business_email,
            company_name: data?.company_name
          })
          $this.selected_image = data?.img
        },
        error(err) { },
      })
  }

  updateContact(data: any, verify?: boolean) {
    let body :any= {
      email: this.user_email,
      phone: this.userDetailForm?.value?.phone,
      contact_person: this.userDetailForm?.value?.contact_person,
      // is_isv: data?.is_isv,
      // is_buyer: data?.is_buyer,
      // is_si: data?.is_si,
      // position_role: data?.position_role,
      img: this.selected_image,
      company_name: this.companyDetailForm?.value?.company_name
    }
    if(verify){   
      body.business_email= this.companyDetailForm?.value?.business_email
    }
    let $this = this
    this.apiService
      .ExecutePut(this.apiService.baseUrl + api_constants.updateUserDetail, body, this.user_email)
      .subscribe({
        next(response: any) {
          if ($this.userDetailForm?.value?.contact_person != $this.user?.contact_person || $this.profileImageChanged) {
            $this.dialogRef.close()
            window.location.reload()
          } else {
            $this.getuserDetail()
            $this.edit_user = false
            $this.edit_company = false
          }
          if (verify) {
            $this.VerifyBusinessEmail()
          }
        },
        error(err) {
          $this._toaster.error(err?.error?.detail)
        },
      })
  }

  addImage(event) {
    let file = <File>event.target.files[0];
    var reader = new FileReader();
    reader.onloadend = (e) => {
      let binaryString = reader.result as string;
      console.log(binaryString);
      this.sendImageToServer(file);
    };
    reader.readAsBinaryString(file);
  }

  sendImageToServer(file: File) {
    let formData: FormData = new FormData();
    formData.append('image_file', file, file.name);
    console.log(formData);
    let $this = this
    this.apiService.ExecutePost(this.apiService.baseUrl + api_constants.updateFile, formData)
      .subscribe({
        next(response: any) {
          $this.selected_image = "https://" + response?.image_url
          $this.profileImageChanged = true
        },
        error(err) {
          console.error('Failed to upload the file.', err);
        },
      })
  }


  VerifyBusinessEmail() {
    let query = new HttpParams();
    query = query.set('email', this.companyDetailForm?.value?.business_email);
    let $this = this
    this.apiService
      .ExecuteGet(this.apiService.baseUrl + api_constants.SendbusinessEmailVerificationLink, "", query)
      .subscribe({
        next(response: any) {
          $this._toaster.success("Please check your email and verify")
        },
        error(err) {
          $this._toaster.error("enter valid email")
        },
      })
  }

  changePassword() {
    let dialogRef = this._dialog.open(ChangePasswordComponent, {
      width: '350px',
      panelClass: "padding-less-popup"
    });
  }

  nameProfileImg(name: string) {
    let spaceIndex = name.indexOf(" ")
    if (spaceIndex > 1) {
      return name.slice(0, 1).toUpperCase() + name.slice(spaceIndex + 1, spaceIndex + 2).toUpperCase() || name.slice(1, 2).toUpperCase()
    } else {
      return name.slice(0, 2).toUpperCase()
    }
  }

}
