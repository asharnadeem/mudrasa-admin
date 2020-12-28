import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Angular2TokenService } from 'angular2-token'
import { HomepageComponent } from './homepage/homepage.component'
import { AddStudentComponent } from './add-student/add-student.component'
import { StudentsReportComponent } from './students-report/students-report.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent, canActivate: [Angular2TokenService] },
  { path: 'add-student', component: AddStudentComponent, canActivate: [Angular2TokenService] },
  { path: 'students-report', component: StudentsReportComponent, canActivate: [Angular2TokenService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }