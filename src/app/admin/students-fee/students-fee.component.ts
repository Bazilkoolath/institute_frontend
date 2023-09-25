import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentComponent } from 'src/app/shared/popup/add-student/add-student.component';

@Component({
  selector: 'app-students-fee',
  templateUrl: './students-fee.component.html',
  styleUrls: ['./students-fee.component.css']
})
export class StudentsFeeComponent implements OnInit {

  students_list:any[]=[
    {
      id:1,
      name:"basil",
      phone:"0548448",
      course:"sd",
      status:"paid"
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
  ) { }

  ngOnInit(): void {

  }
    
}

