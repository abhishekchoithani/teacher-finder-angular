import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(private apiService: ApiService, private route: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('email')) {

    } else {
      alert("user not authenticated");
      this.route.navigate(['login']);
    }
    
  }

  logout() {
    this.apiService.logout();
    this.route.navigate(['login']);
   // this.isAuthenticated = false;
  }

}
