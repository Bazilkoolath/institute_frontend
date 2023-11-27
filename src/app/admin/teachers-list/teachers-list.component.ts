import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { api_constants } from 'src/app/shared/constants/api-constants';
import { UserStatus } from 'src/app/shared/constants/enum';
import { AddStudentComponent } from 'src/app/shared/popup/add-student/add-student.component';
import { AddTeacherComponent } from 'src/app/shared/popup/add-teacher/add-teacher.component';
import { DeletePopupComponent } from 'src/app/shared/popup/delete-popup/delete-popup.component';
import { ApiService } from 'src/app/shared/service/api.service';


@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.scss']
})
export class TeachersListComponent implements OnInit {
  teacher_list:any[]=[]
  user_status=UserStatus
  searchText:any
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
    dialogRef.afterClosed().subscribe(result => {
      this.getTeacher()
    });
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

  teacherDetails(id:any){
    console.log(id)
     this._router.navigateByUrl('/admin/teacher-detail/'+id)
  }
  deleteUser(){
    const dialogRef = this._dialog.open(DeletePopupComponent, {
     width:"500px"
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      
    });
  }
  addStudent(data?:any){
    let dialogRef = this._dialog.open(AddStudentComponent, {
      width: '400px',
      height: '100%',
      data: data,
      position: {
        top: '0px',
        right: '0px',
      },
      // enterAnimationDuration: '500ms',
      direction: 'ltr',
      panelClass: "side-popup"
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getStudents()
    });
  }
  getStudents() {
    throw new Error('Method not implemented.');
  }

}
