import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {

  title = 'teacherfinder';
  public email: string = '';
  public password: string = '';
  public isAuthenticated: boolean  = false;
  validateForm!: UntypedFormGroup;

  constructor(private apiService: ApiService, private route: Router, 
    private fb: UntypedFormBuilder, private modalService: NzModalService){}

  ngOnInit(): void {
    
    if(localStorage.getItem('isAuthenticated')) {
      if(localStorage.getItem('role') != null && localStorage.getItem('role') == 'TEACHER') {
        
        this.modalService.info({
          nzTitle:'User Already Logged In',
          nzContent:'Press Okay to continue',
          nzOnOk: () => this.route.navigate(['teacher-dashboard']),
          nzOnCancel: () => this.route.navigate(['teacher-dashboard'])
          
          
        });

        
      
      } else if (localStorage.getItem('role') == 'STUDENT'){
        this.modalService.info({
          nzTitle: 'Unable to login',
          nzContent: 'Kindly Login in with teacher credentials',
          nzOnOk: () => this.route.navigate(['']),
          nzOnCancel: () => this.route.navigate([''])
        });
      } 
      
    } else {
      
    }
    
  }

  login() {
    this.apiService.teacherLogin(this.email, this.password).subscribe(
      {
        next:(value: any) => {
          localStorage.setItem('email', this.email);
          localStorage.setItem('password', this.password);
          localStorage.setItem('role', 'TEACHER');
          localStorage.setItem('isAuthenticated', 'true')
          this.isAuthenticated = true;
          this.successModal();
          //this.route.navigate(['teacher-dashboard']);
          
        }, 
        error: err => {
          this.errorModal();
          this.isAuthenticated = false;
        }
      },
      
    );
  }

  errorModal(): void {
    const modal = this.modalService.error({
      nzTitle: 'Unable to login',
      nzContent: 'Please enter correct credentials'
    });

    //setTimeout(() => modal.destroy(), (3*1000));
  }

  successModal(): void {
    const modal = this.modalService.success({
      nzTitle: 'Logged In',
      nzContent: 'user logged in successfully',
      nzOnOk: () => this.route.navigate(['teacher-dashboard'])
    });

    setTimeout(() => {
      modal.destroy(),
      this.route.navigate(['/teacher-dashboard'])
    }
      , (3000));
  }

  logout() {
    this.apiService.logout();
    this.isAuthenticated = false;
  }


}
