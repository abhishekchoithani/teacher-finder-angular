import { Injectable } from '@angular/core';
import { GlobalVariables } from './Global-variable';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }



  logout() {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('role');
    localStorage.removeItem('isAuthenticated');
  }

  login(email: string, password: string) {
    let base64Data = btoa(email + ':' + password);
    let header = this.getRequestOption(base64Data);
    return this.http.get<any>(GlobalVariables.baseUrl + 'login', header);
  }

  updateTeacher(user: User) {
    let base64Data = btoa(user.email + ':' + user.password);
    let header = this.getRequestOption(base64Data);
    return this.http.put<any>(GlobalVariables.baseUrl + 'teacher', user, header);
  }

  teacherLogin(email: string, password: string) {
    let base64Data = btoa(email + ':' + password);
    let header = this.getRequestOption(base64Data);
    return this.http.get<any>(GlobalVariables.baseUrl + 'teacher/login', header);
  }

  signUp(user: User) {
    return this.http.post<any>(GlobalVariables.baseUrl + 'signup', user);
  }

  teacherSignUp(user: User) {
    return this.http.post<any>(GlobalVariables.baseUrl + 'teacher-signup', user);
  }

  studentSignUp(user: User) {
    return this.http.post<any>(GlobalVariables.baseUrl + 'student-signup', user);
  }

  getRequestOption(authorization: string) {
    const headers = {
      'Authorization': 'Basic ' + authorization,
      'Content-Type': 'application/json'
    }

    return {
      headers: new HttpHeaders(headers),
    }
  }
}

