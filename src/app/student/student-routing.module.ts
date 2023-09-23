import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExamResultComponent } from './exam-result/exam-result.component';
import { StudentsAttendanceComponent } from './students-attendance/students-attendance.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { StudentComponent } from './student.component';

const routes: Routes = [
  {
    path:"",
    component:StudentComponent,
    children:[  {
      path:"",
      redirectTo:"dashboard",
      pathMatch:"full"
    },
  {
    path:'dashboard',
    component:DashboardComponent
  },{
    path:'exam-result',
    component:ExamResultComponent
  },{
    path:'students-attendance',
    component:StudentsAttendanceComponent
  },{
    path:'time-table',
    component:TimeTableComponent
  }]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
