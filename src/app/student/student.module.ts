import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExamResultComponent } from './exam-result/exam-result.component';
import { StudentsAttendanceComponent } from './students-attendance/students-attendance.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ResultDetailsComponent } from './result-details/result-details.component';
import { ReferencesComponent } from './references/references.component';
import { SilabusComponent } from './silabus/silabus.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { ResultListComponent } from './result-list/result-list.component';

@NgModule({
  declarations: [
    StudentComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    ExamResultComponent,
    StudentsAttendanceComponent,
    TimeTableComponent,
    AccountSettingsComponent,
    ResultDetailsComponent,
    ReferencesComponent,
    SilabusComponent,
    AnnouncementComponent,
    ResultListComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
  ]
})
export class StudentModule { }
