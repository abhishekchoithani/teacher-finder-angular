import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalVariables } from '../Global-variable';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {

  email!: string;

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post(GlobalVariables.baseUrl + 'forget-password', this.email)
    .subscribe({
      next: (value: any) => {
        console.log("Password reset email send successfully");
        alert("Password reset email send successfully");
      
      }, error: err => {
        console.error("Error in sending password reset email");
        console.error(err);
        alert("Error: " + err);
      }
    });
  }

}
