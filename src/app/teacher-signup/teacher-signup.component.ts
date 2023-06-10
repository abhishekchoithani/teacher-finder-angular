import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../model/user';

@Component({
  selector: 'app-teacher-signup',
  templateUrl: './teacher-signup.component.html',
  styleUrls: ['./teacher-signup.component.css']
})
export class TeacherSignupComponent implements OnInit {

  user =  {} as User;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  teacherSignup(user: User) {
    this.apiService.teacherSignUp(user).subscribe(
      {
        next: (value: any) => {
          alert("SUCCESS: " + value);
        },
        error: err => {
          alert("ERROR: " + err);
        }
        
      }

    );
  
  }

}
