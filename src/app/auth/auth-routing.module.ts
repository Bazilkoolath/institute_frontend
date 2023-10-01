import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { AuthComponent } from './auth.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SetPasswordComponent } from './set-password/set-password.component';

const routes: Routes = [
  {
    path:"",
    component:AuthComponent,
    children:[  {
      path:"",
      redirectTo:"login",
      pathMatch:"full"
    },
  {
    path:"login",
    component:LoginComponent
  },{
    path:'sign-up',
    component:StudentRegistrationComponent
  },{
    path:'teacher-login',
    component:TeacherLoginComponent
  },{
    path:'admin-login',
    component:AdminLoginComponent
  },{
    path:'set-password/:id',
    component:SetPasswordComponent
  }]}
];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
