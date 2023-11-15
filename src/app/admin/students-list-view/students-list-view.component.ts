import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentComponent } from 'src/app/shared/popup/add-student/add-student.component';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';
import { api_constants } from 'src/app/shared/constants/api-constants';
import { UserStatus } from 'src/app/shared/constants/enum';
import { DeletePopupComponent } from 'src/app/shared/popup/delete-popup/delete-popup.component';

@Component({
  selector: 'app-students-list-view',
  templateUrl: './students-list-view.component.html',
  styleUrls: ['./students-list-view.component.scss']
})
export class StudentsListViewComponent implements OnInit {
  students_list:any[]=[]
  selected_course:any
  user_status=UserStatus
  searchText:any
  constructor(
    private _dialog:MatDialog,
    private _router:Router,
    private apiService: ApiService,
    private dialog:MatDialog
) { }

ngOnInit(): void {
  this.getStudents()
}


getStudents() {
  let $this = this
  this.apiService
    .ExecuteGet(this.apiService.baseUrl + api_constants.getStudentList)
    .subscribe({
      next(response: any) {
        $this.students_list=response?.result?.data
      },
      error(err) {
      },
    })
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

  selectCourse(){
    console.log("dcf",this.selected_course)
  }

  deleteUser(){
    const dialogRef = this.dialog.open(DeletePopupComponent, {
     width:"500px"
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      
    });
  }
    
}

