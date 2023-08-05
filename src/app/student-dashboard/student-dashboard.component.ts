import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  public student = {} as Student;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('isAuthenticated') && localStorage.getItem('email') ) {
      if(localStorage.getItem('role')=='STUDENT'){

      } else {
        this.logout();
        this.router.navigate(['']);
      }
    } else {
      this.logout();
      this.router.navigate(['']);
    }
    if(localStorage.getItem('studentId')) {
      var studentId = localStorage.getItem('studentId');
      this.apiService.getStudentById(Number(studentId)).subscribe(
        {
          next: (value) => {
              this.student = value;
          },
        }
      )
    }
  }

  logout() {
    this.apiService.logout();
    this.router.navigate(['student-login']);
  }

}
