import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExamResultComponent } from './exam-result/exam-result.component';
import { StudentsAttendanceComponent } from './students-attendance/students-attendance.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { StudentComponent } from './student.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ReferencesComponent } from './references/references.component';
import { ResultDetailsComponent } from './result-details/result-details.component';
import { SilabusComponent } from './silabus/silabus.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { ResultListComponent } from './result-list/result-list.component';

const routes: Routes = [
  {
    path:"",
    component:StudentComponent,
    children:[  {
      path:"",
      redirectTo:"announcement",
      pathMatch:"full"
    },
  {
      path:"announcement",
      component:AnnouncementComponent
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
    path:"result-list/:id",
    component:ResultListComponent
  },]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
