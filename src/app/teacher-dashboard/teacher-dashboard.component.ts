import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {

  public user!: User; //teacher
  constructor(private apiService: ApiService, private route: Router) { }

  ngOnInit(): void {
  }


  saveData() {
    this.user.id = 10;
    this.apiService.updateTeacher(this.user);
  }

  logout() {
    this.apiService.logout();
    this.route.navigate(['']);
   // this.isAuthenticated = false;
  }

}
