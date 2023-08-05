import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { TeacherSignupComponent } from './teacher-signup/teacher-signup.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { TeacherProfileUpdateComponent } from './teacher-profile-update/teacher-profile-update.component';
import { TeacherCourseUpdateComponent } from './teacher-course-update/teacher-course-update.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'welcome', component: WelcomePageComponent},
  { path: 'student-login', component: StudentLoginComponent},
  { path: 'teacher-login', component: TeacherLoginComponent},
  { path: 'teacher-signup', component: TeacherSignupComponent},
  { path: 'student-signup', component: StudentSignupComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'teacher-dashboard', component: TeacherDashboardComponent},
  { path: 'student-dashboard', component: StudentDashboardComponent},
  { path: 'teacher-profile-update', component: TeacherProfileUpdateComponent},
  { path: 'teacher-course-update/:id', component: TeacherCourseUpdateComponent},
  { path: '', component: WelcomePageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

