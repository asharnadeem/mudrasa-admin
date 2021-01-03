import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { LoggedInGuard } from './guards/logged-in/logged-in.guard';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [LoggedInGuard] },
  { path: 'homepage', component: HomepageComponent, canActivate: [AuthGuard] },
  {
    path: 'students',
    component: StudentsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'teachers',
    component: TeachersComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
