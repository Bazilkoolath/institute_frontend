import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    StudentRegistrationComponent,
    TeacherLoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
