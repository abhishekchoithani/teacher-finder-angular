import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../model/user';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-signup',
  templateUrl: './teacher-signup.component.html',
  styleUrls: ['./teacher-signup.component.css']
})
export class TeacherSignupComponent implements OnInit {

  user = {} as User;

  constructor(private apiService: ApiService, private modalService: NzModalService, private route: Router) { }

  ngOnInit(): void {
  }

  teacherSignup() {
    
    this.apiService.teacherSignUp(this.user).subscribe(
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

  success(): void {
    const modal = this.modalService.success({
      nzTitle: 'Teacher registered successfully'
      //nzContent: 'This modal will be destroyed after 1 second'
    });

    setTimeout(() => {
      modal.destroy(),
      this.route.navigate(["/teacher-login"]);
    }, (3*1000));
    
  }

  errorModal(): void {
    const modal = this.modalService.error({
      nzTitle: 'Error occured. Can not sign up teacher'
      //nzContent: 'This modal will be destroyed after 1 second'
    });

    // setTimeout(() => {
    //   modal.destroy(),
    
    //   this.route.navigate(["/teacher-login"]);
    // }, (3*1000));
    
  }
}

