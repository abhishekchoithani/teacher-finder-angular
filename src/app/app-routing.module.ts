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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'welcome', component: WelcomePageComponent},
  { path: 'student-login', component: WelcomePageComponent},
  { path: 'teacher-login', component: WelcomePageComponent},
  { path: 'teacher-signup', component: TeacherSignupComponent},
  { path: 'student-sign', component: StudentSignupComponent},
  { path: '', component: WelcomePageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
