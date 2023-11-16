import { HttpParams } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { api_constants } from 'src/app/shared/constants/api-constants';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent {
  course: any
  date: any
  constructor(
    public _dialogRef: MatDialogRef<ResultListComponent>,
    @Inject(MAT_DIALOG_DATA) public studentsattendance_list: any,
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

  submit() {
    if (!this.date) {
      this.toaster.error("enter valid date")
      return
    }
    for (let item of this.studentsattendance_list) {
      this.update(item)
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
