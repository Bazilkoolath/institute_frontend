import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    redirectTo:"",
    pathMatch:"full"
  },
{
    path:"student", 
    loadChildren: () => import('./student/student.module').then(module => module.StudentModule)
  },{
    path:"teacher",
    loadChildren: () => import('./teacher/teacher.module').then(module => module.TeacherModule)
  },{
    path:"admin",
    loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule)
  },
  {
    path:"",
    loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
