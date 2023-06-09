import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { GlobalVariables } from './Global-variable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'teacherfinder';
  email: string = '';
  password: string = '';
  public isAuthenticated: boolean  = false;

  constructor(private apiService: ApiService, private router: Router){}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  login(email: string, password: string) {
    this.apiService.login(email, password).subscribe(
      {
        next:(value: any) => {
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
          this.isAuthenticated = true;

          this.router.navigate(['home']);
          
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
