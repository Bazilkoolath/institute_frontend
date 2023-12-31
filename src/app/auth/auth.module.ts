import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { SharedModule } from '../shared/shared.module';
import { SetPasswordComponent } from './set-password/set-password.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    StudentRegistrationComponent,
    SetPasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
