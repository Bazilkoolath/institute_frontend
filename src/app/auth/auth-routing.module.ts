import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { AuthComponent } from './auth.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { HomeComponent } from '../home/home.component';

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
    path:'set-password/:id',
    component:SetPasswordComponent
  },{
    path:'student-register',
    component:StudentRegistrationComponent
  }]}
];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
