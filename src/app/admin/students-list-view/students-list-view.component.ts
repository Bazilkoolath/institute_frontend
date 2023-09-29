import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentComponent } from 'src/app/shared/popup/add-student/add-student.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-list-view',
  templateUrl: './students-list-view.component.html',
  styleUrls: ['./students-list-view.component.scss']
})
export class StudentsListViewComponent implements OnInit {
  students_list:any[]=[
    {
      id:1,
      name:"basil",
      phone:"0548448",
      course:"sd",
      status:"active"
    },{
      id:2,
      name:"sahal",
      phone:"0548448",
      course:"sd",
      status:"pending"
    },{
      id:3,
      name:"sahal",
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

  addStudent(){
    let dialogRef = this._dialog.open(AddStudentComponent, {
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

  studentDetails(id:any){
    console.log(id)
     this._router.navigateByUrl('/admin/student-detail/'+id)
  }

  
    
}

