import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsAttendanceComponent } from './students-attendance/students-attendance.component';
import { StudentsFeeComponent } from './students-fee/students-fee.component';
import { StudentsListViewComponent } from './students-list-view/students-list-view.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { ExamResultComponent } from './exam-result/exam-result.component';
import { ResultDetailsComponent } from './result-details/result-details.component';
import { ReferencesComponent } from './references/references.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { SilabusComponent } from './silabus/silabus.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { ResultListComponent } from './result-list/result-list.component';
import { StudentComplaintComponent } from './student-complaint/student-complaint.component';


@NgModule({
  declarations: [
    TeacherComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    StudentsAttendanceComponent,
    StudentsFeeComponent,
    StudentsListViewComponent,
    TimeTableComponent,
    ExamResultComponent,
    ResultDetailsComponent,
    ReferencesComponent,
    StudentDetailComponent,
    AccountSettingsComponent,
    SilabusComponent,
    AnnouncementComponent,
    ResultListComponent,
    StudentComplaintComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedModule,
  ]
})
export class TeacherModule { }
