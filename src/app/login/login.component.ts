import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'teacherfinder';
  email: string = '';
  password: string = '';
  public isAuthenticated: boolean  = false;

  constructor(private apiService: ApiService, private route: Router){}

  ngOnInit(): void {
    if(localStorage.getItem('email')) {
      alert("user already authenticated");
       this.route.navigate(['home']);
    } else {
      
    }
  }

  login(email: string, password: string) {
    this.apiService.login(email, password).subscribe(
      {
        next:(value: any) => {
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
          this.isAuthenticated = true;

          this.route.navigate(['home']);
          
        }, 
        error: err => {
          alert('unable to login');
          this.isAuthenticated = false;
        }
      },
      
    );
  }

  logout() {
    this.apiService.logout();
    this.isAuthenticated = false;
  }

}
