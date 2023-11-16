import { HttpParams } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { api_constants } from 'src/app/shared/constants/api-constants';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-result-details',
  templateUrl: './result-details.component.html',
  styleUrls: ['./result-details.component.scss']
})
export class ResultDetailsComponent {
  course: any
  date: any
  mark:any
  constructor(
    private apiService: ApiService,
    private toaster: ToastrService
  ) {

  }
  ngOnInit(): void {
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

  update(data: any) {
    data.attendance.push({
      title: data?.status ? "present" : "absent",
      date: this.date,
      backgroundColor: !data?.status ? '#FF5733' : ''
    })
    let body = {
      attendance: data.attendance
    }
    let query = new HttpParams();
    query = query.set('id', data?._id);
    let $this = this
    this.apiService
      .ExecutePatch(this.apiService.baseUrl + api_constants.studentProfileUpdate, body, "", query)
      .subscribe({
        next(response: any) {
        },
        error(err) {
        },
      })
  }
}
