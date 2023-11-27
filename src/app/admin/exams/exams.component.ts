import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentComponent } from 'src/app/shared/popup/add-student/add-student.component';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';
import { api_constants } from 'src/app/shared/constants/api-constants';
import { UserStatus } from 'src/app/shared/constants/enum';
import { AddExamComponent } from 'src/app/shared/popup/add-exam/add-exam.component';
import { DeletePopupComponent } from 'src/app/shared/popup/delete-popup/delete-popup.component';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent {
  students_list:any[]=[]
  user_status=UserStatus
  searchText:any
  constructor(
    private _dialog:MatDialog,
    private _router:Router,
    private apiService: ApiService,
) { }

ngOnInit(): void {
  this.getStudents()
}


getStudents() {
  let $this = this
  this.apiService
    .ExecuteGet(this.apiService.baseUrl + api_constants.getExamList)
    .subscribe({
      next(response: any) {
        $this.students_list=response?.result?.data
      },
      error(err) {
      },
    })
}

  addStudent(){
    let dialogRef = this._dialog.open(AddExamComponent, {
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
      this.getStudents()
    });
  }

  studentDetails(id:any){
    console.log(id)
     this._router.navigateByUrl('/admin/student-detail/'+id)
  }
  deleteUser(){
    const dialogRef = this._dialog.open(DeletePopupComponent, {
     width:"500px"
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      
    });
  }
  
    
}

