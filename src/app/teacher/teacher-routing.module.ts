import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsAttendanceComponent } from './students-attendance/students-attendance.component';
import { StudentsFeeComponent } from './students-fee/students-fee.component';
import { StudentsListViewComponent } from './students-list-view/students-list-view.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { TeacherComponent } from './teacher.component';
import { ExamResultComponent } from './exam-result/exam-result.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ReferencesComponent } from './references/references.component';
import { ResultDetailsComponent } from './result-details/result-details.component';
import { SilabusComponent } from './silabus/silabus.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { ResultListComponent } from './result-list/result-list.component';

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
  },{
    path:'exam-result',
    component:ExamResultComponent
  },{
    path:"account-setings",
    component:AccountSettingsComponent
  },{
    path:"references",
    component:ReferencesComponent
  },{
    path:"result-detail/:id",
    component:ResultDetailsComponent
  },{
    path:"silabus",
    component:SilabusComponent
  },{
    path:"students-details/:id",
    component:StudentDetailComponent
  },{
    path:"announcement",
    component:AnnouncementComponent
  },{
    path:"result-list/:id",
    component:ResultListComponent
  },]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
