import { Injectable } from '@angular/core';
import { GlobalVariables } from './Global-variable';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { User } from './model/user';
import { Teacher } from './model/Teacher';
import { Observable } from 'rxjs';
import { Student } from './model/student';
import { course } from './model/course';

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
    localStorage.removeItem('teacherId');
    localStorage.removeItem('studentId');
  }

  login(email: string, password: string) {
    let base64Data = btoa(email + ':' + password);
    let header = this.getRequestOption(base64Data);
    return this.http.get<any>(GlobalVariables.baseUrl + 'login', header);
  }

  studentLogin(email: string, password: string): Observable<Student> {
    let base64Data = btoa(email + ':' + password);
    let header = this.getRequestOption(base64Data);
    return this.http.get<Student>(GlobalVariables.baseUrl + 'student/login', header);
  }

  updateTeacher(teacher: Teacher) {
    let base64Data = btoa(localStorage.getItem('email') + ':' + localStorage.getItem('password'));
    let header = this.getRequestOption(base64Data);
    return this.http.put<any>(GlobalVariables.baseUrl + 'teacher', teacher, header);
  }

  teacherLogin(email: string, password: string) {
    let base64Data = btoa(email + ':' + password);
    let header = this.getRequestOption(base64Data);
    return this.http.get<any>(GlobalVariables.baseUrl + 'teacher/login', header);
  }

  getTeacherById(id: number): Observable<Teacher> {
    let base64Data = btoa(localStorage.getItem('email') + ':' + localStorage.getItem('password'));
    let header = this.getRequestOption(base64Data);
    return this.http.get<Teacher>(GlobalVariables.baseUrl + 'teacher/' + id, header);
  }

  teacherProfileUpload(uploadImageData: FormData, id: number): Observable<Teacher> {
    let base64Data = btoa(localStorage.getItem('email') + ':' + localStorage.getItem('password'));
    let header = this.getRequestOption(base64Data);
    return this.http.post<any>(GlobalVariables.baseUrl + 'teacher/profile-upload', uploadImageData, header);
  }

  getStudentById(id: number): Observable<Student> {
    let base64Data = btoa(localStorage.getItem('email') + ':' + localStorage.getItem('password'));
    let header = this.getRequestOption(base64Data);
    return this.http.get<Student>(GlobalVariables.baseUrl + 'student/' + id, header);
  }

  
  getAllCourses(): Observable<course[]> {
    let base64Data = btoa(localStorage.getItem('email') + ':' + localStorage.getItem('password'));
    let header = this.getRequestOption(base64Data);
    return this.http.get<course[]>(GlobalVariables.baseUrl + 'courses' , header);
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

