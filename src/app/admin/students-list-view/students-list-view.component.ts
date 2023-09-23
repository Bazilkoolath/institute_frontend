import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-list-view',
  templateUrl: './students-list-view.component.html',
  styleUrls: ['./students-list-view.component.css']
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
  constructor() { }

  ngOnInit(): void {
  }

}
