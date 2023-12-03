import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentsAttendanceComponent } from './students-attendance/students-attendance.component';
import { StudentsFeeComponent } from './students-fee/students-fee.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { TeachersPaymentComponent } from './teachers-payment/teachers-payment.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { StudentsListViewComponent } from './students-list-view/students-list-view.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ResultDetailsComponent } from './result-details/result-details.component';
import { ReferencesComponent } from './references/references.component';
import { SilabusComponent } from './silabus/silabus.component';
import { BatchesComponent } from './batches/batches.component';
import { ExamsComponent } from './exams/exams.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { ResultListComponent } from './result-list/result-list.component';
import { StudentComplaintComponent } from './student-complaint/student-complaint.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    NavbarComponent,
    StudentsAttendanceComponent,
    StudentsFeeComponent,
    StudentsListViewComponent,
    TeachersListComponent,
    TeachersPaymentComponent,
    TimeTableComponent,
    SidebarComponent,
    StudentDetailComponent,
    TeacherDetailComponent,
    AccountSettingsComponent,
    ResultDetailsComponent,
    ReferencesComponent,
    SilabusComponent,
    BatchesComponent,
    ExamsComponent,
    AnnouncementComponent,
    ResultListComponent,
    StudentComplaintComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ]
})
export class AdminModule { }
