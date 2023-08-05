import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  public email: string = '';
  public password: string = '';
  isAuthenticated: boolean = false;

  constructor(private apiService: ApiService, private modalService: NzModalService, private route: Router) { }

  ngOnInit(): void {
  }
  

  login() {
    this.apiService.studentLogin(this.email, this.password).subscribe(
      {
        next:(value: any) => {
          localStorage.setItem('studentId', value.id)
          localStorage.setItem('email', this.email);
          localStorage.setItem('password', this.password);
          localStorage.setItem('role', 'STUDENT');
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

  successModal(): void {
    const modal = this.modalService.success({
      nzTitle: 'Logged In',
      nzContent: 'student logged in successfully',
      nzOnOk: () => this.route.navigate(['student-dashboard'])
    });

    setTimeout(() => {
      modal.destroy(),
      this.route.navigate(['/student-dashboard'])
    }
      , (3000));
  }

  errorModal(): void {
    const modal = this.modalService.error({
      nzTitle: 'Unable to login',
      nzContent: 'Please enter correct credentials'
    });

    //setTimeout(() => modal.destroy(), (3*1000));
  }

  logout() {
    this.apiService.logout();
    this.isAuthenticated = false;
  }

}

