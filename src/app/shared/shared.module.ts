import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu'
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SearchFilterPipe } from './pipe/search-filter.pipe';
import { AddStudentComponent } from './popup/add-student/add-student.component';
import { AddPaymentComponent } from './popup/add-payment/add-payment.component';
import { AddTeacherComponent } from './popup/add-teacher/add-teacher.component';
import { AddAdminComponent } from './popup/add-admin/add-admin.component';
import { AddExamComponent } from './popup/add-exam/add-exam.component';
import { AddBatchComponent } from './popup/add-batch/add-batch.component';
import { AddAnnouncementComponent } from './popup/add-announcement/add-announcement.component';
import { CourseFilterPipe } from './pipe/course-filter.pipe';
import { AddAttendanceComponent } from './popup/add-attendance/add-attendance.component';
import { AddResultComponent } from './popup/add-result/add-result.component';
import { DeletePopupComponent } from './popup/delete-popup/delete-popup.component';

@NgModule({
  declarations: [
    SearchFilterPipe,
    AddStudentComponent,
    AddTeacherComponent,
    AddPaymentComponent,
    AddAdminComponent,
    AddExamComponent,
    AddBatchComponent,
    AddAnnouncementComponent,
    CourseFilterPipe,
    AddAttendanceComponent,
    AddResultComponent,
    AddResultComponent,
    DeletePopupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatExpansionModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    FullCalendarModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatExpansionModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    SearchFilterPipe,
    AddStudentComponent,
    AddPaymentComponent,
    FullCalendarModule,
    AddExamComponent,
    AddBatchComponent,
    CourseFilterPipe,
    DeletePopupComponent
  ]
})
export class SharedModule { }
