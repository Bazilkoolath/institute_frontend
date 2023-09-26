import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddTeacherComponent } from 'src/app/shared/popup/add-teacher/add-teacher.component';


@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit {
  teacher_list:any[]=[
    {
      id:1,
      name:"teacher1",
      phone:"0548448",
      course:"sd",
      status:"active"
    },{
      id:2,
      name:"teacher2",
      phone:"0548448",
      course:"sd",
      status:"pending"
    },{
      id:3,
      name:"teacher3",
      phone:"0548448",
      course:"sd",
      status:"deactivated"
    }
  ]

  constructor(
    private _dialog:MatDialog,
    private _router:Router
  ) { }

  ngOnInit(): void {
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
