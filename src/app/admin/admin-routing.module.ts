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
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ReferencesComponent } from './references/references.component';
import { ResultDetailsComponent } from './result-details/result-details.component';
import { SilabusComponent } from './silabus/silabus.component';
import { BatchesComponent } from './batches/batches.component';
import { ExamsComponent } from './exams/exams.component';


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
  },{
    path:"batch",
    component:BatchesComponent
  },{
    path:"exams",
    component:ExamsComponent
  },{
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
  },{
    path:"student-detail/:id",
    component:StudentDetailComponent
  },{
    path:"teacher-detail/:id",
    component:TeacherDetailComponent
  },{
    path:"account-setings",
    component:AccountSettingsComponent
  },{
    path:"references",
    component:ReferencesComponent
  },{
    path:"result-details",
    component:ResultDetailsComponent
  },{
    path:"silabus",
    component:SilabusComponent
  },{
    path:"teachers-details",
    component:TeacherDetailComponent
  }]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
