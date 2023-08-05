
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../model/user';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css']
})
export class StudentSignupComponent implements OnInit {
  user = {} as User;

  
  constructor(private apiService: ApiService, private modalService: NzModalService, private route: Router) {} 

  ngOnInit(): void {
  }

  studentSignup() {
    this.apiService.studentSignUp(this.user).subscribe(
      {
        next: (value: any) => {
          this.success();
        },
        error: err => {
          this.errorModal();
        }
      }
    );
  }
  student(user: any) {
    throw new Error('Method not implemented.');
  }

  success(): void {
    const modal = this.modalService.success({
      nzTitle: 'student registered successfully'
    
    });

    setTimeout(() => {
      modal.destroy(),
      this.route.navigate(["/student-login"]);
    }, (3*1000));
    
  }

  errorModal(): void {
    const modal = this.modalService.error({
      nzTitle: 'Error occured. Can not sign up student'

    });    
  }
}
