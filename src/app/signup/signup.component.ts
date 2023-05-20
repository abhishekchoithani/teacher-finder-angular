import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  user =  {} as User;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  signup(user: User) {
    this.apiService.signUp(user);
  
  }


}
