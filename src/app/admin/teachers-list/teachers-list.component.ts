import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { api_constants } from 'src/app/shared/constants/api-constants';
import { UserStatus } from 'src/app/shared/constants/enum';
import { AddTeacherComponent } from 'src/app/shared/popup/add-teacher/add-teacher.component';
import { ApiService } from 'src/app/shared/service/api.service';


@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.scss']
})
export class TeachersListComponent implements OnInit {
  teacher_list:any[]=[]
  user_status=UserStatus
  constructor(
    private _dialog:MatDialog,
    private _router:Router,
    private apiService: ApiService,
) { }

ngOnInit(): void {
  this.getTeacher()
}


getTeacher() {
  let $this = this
  this.apiService
    .ExecuteGet(this.apiService.baseUrl + api_constants.getTeacherList)
    .subscribe({
      next(response: any) {
        $this.teacher_list=response?.result?.data
      },
      error(err) {
      },
    })
}

  addTeacher(){
    let dialogRef = this._dialog.open(AddTeacherComponent, {
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
  teacherDetails(id:any){
    console.log(id)
     this._router.navigateByUrl('/admin/teacher-detail/'+id)
  }

}
