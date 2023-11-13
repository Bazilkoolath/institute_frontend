import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { api_constants } from 'src/app/shared/constants/api-constants';
import { UserStatus } from 'src/app/shared/constants/enum';
import { AddAttendanceComponent } from 'src/app/shared/popup/add-attendance/add-attendance.component';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-students-attendance',
  templateUrl: './students-attendance.component.html',
  styleUrls: ['./students-attendance.component.scss']
})
export class StudentsAttendanceComponent implements OnInit {
  course:any
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
      .ExecuteGet(this.apiService.baseUrl+api_constants.getStudentList )
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
      data: this.studentsattendance_list,
      position: {
        top: '0px',
        right: '0px',
      },
      // enterAnimationDuration: '500ms',
      direction: 'ltr',
      panelClass: "side-popup"
    });

  }

  selectCourse(){
    
  }

  studentAttendanceDetails(id: any) {
    console.log(id)
    this._router.navigateByUrl('/admin/')
  }

  nameProfileImg(name: string) {
    let spaceIndex =0
    if(name?.includes(" ")){
      spaceIndex = name?.indexOf(" ")
    }
    if (spaceIndex > 1) {
      return name.slice(0, 1).toUpperCase() + name.slice(spaceIndex + 1, spaceIndex + 2).toUpperCase() || name.slice(1, 2).toUpperCase()
    } else {
      return name?.slice(0, 2).toUpperCase()
    }
  }

  studentDetails(id:any){
    console.log(id)
     this._router.navigateByUrl('/admin/student-detail/'+id)
  }
}
