import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserStatus } from 'src/app/shared/constants/enum';
import { AddAttendanceComponent } from 'src/app/shared/popup/add-attendance/add-attendance.component';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-students-attendance',
  templateUrl: './students-attendance.component.html',
  styleUrls: ['./students-attendance.component.scss']
})
export class StudentsAttendanceComponent implements OnInit {

  studentsattendance_list: any[] = []
  user_status = UserStatus
  constructor(
    private _dialog: MatDialog,
    private _router: Router,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.getStudentsAttendance()
  }


  getStudentsAttendance() {
    let $this = this
    this.apiService
      .ExecuteGet(this.apiService.baseUrl )
      .subscribe({
        next(response: any) {
          $this.studentsattendance_list = response?.result?.data
        },
        error(err) {
        },
      })
  }

  addStudentAttendance() {
    let dialogRef = this._dialog.open(AddAttendanceComponent, {
      width: '400px',
      height: '100%',
      data: {},
      position: {
        top: '0px',
        right: '0px',
      },
      // enterAnimationDuration: '500ms',
      direction: 'ltr',
      panelClass: "side-popup"
    });

  }

  studentAttendanceDetails(id: any) {
    console.log(id)
    this._router.navigateByUrl('/admin/')
  }
}
