import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsAttendanceComponent } from './students-attendance/students-attendance.component';
import { StudentsFeeComponent } from './students-fee/students-fee.component';
import { StudentsListViewComponent } from './students-list-view/students-list-view.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { TeacherComponent } from './teacher.component';

const routes: Routes = [
  {
    path:"",
    component:TeacherComponent,
    children:[  {
      path:"",
      redirectTo:"dashboard",
      pathMatch:"full"
    },
  {
    path:'dashboard',
    component:DashboardComponent
  },{
    path:'students-attendance',
    component:StudentsAttendanceComponent
  },{
    path:'students-fee',
    component:StudentsFeeComponent
  },{
    path:'students-list-view',
    component:StudentsListViewComponent
  },{
    path:'time-table',
    component:TimeTableComponent
  }]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
