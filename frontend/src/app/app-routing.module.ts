import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';
import { HomepageComponent } from './homepage/homepage.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentsReportComponent } from './students-report/students-report.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { LoggedInGuard } from './guards/logged-in/logged-in.guard';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [LoggedInGuard] },
  { path: 'homepage', component: HomepageComponent, canActivate: [AuthGuard] },
  {
    path: 'add-student',
    component: AddStudentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'students-report',
    component: StudentsReportComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
