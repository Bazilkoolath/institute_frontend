import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsAttendanceComponent } from './students-attendance/students-attendance.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { StudentsListViewComponent } from './students-list-view/students-list-view.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { StudentsFeeComponent } from './students-fee/students-fee.component';
import { TeachersPaymentComponent } from './teachers-payment/teachers-payment.component';


const routes: Routes = [
  {
    path:"",
    component:AdminComponent,
    children:[  {
      path:"",
      redirectTo:"dashboard",
      pathMatch:"full"
    },
  {
    path:"dashboard",
    component:DashboardComponent
  }, {
    path:"students-list",
    component:StudentsListViewComponent
  }, {
    path:"teachers-list",
    component:TeachersListComponent
  }, {
    path:"students-payment",
    component:StudentsFeeComponent
  }, {
    path:"teachers-payment",
    component:TeachersPaymentComponent
  },{
    path:'student-attendance',
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
export class AdminRoutingModule { }
