import { Injectable } from '@angular/core';
import { GlobalVariables } from './Global-variable';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    let base64Data = btoa(email + ':' + password);
    let header = this.getRequestOption(base64Data);
    return this.http.get<any>(GlobalVariables.baseUrl + 'login', header);
  }

  logout() {
    localStorage.removeItem('email');
          localStorage.removeItem('password');
  }

  
signUp(user: User) {
  const headers = { 'content-type': 'application/json'} ;
  const body=JSON.stringify(user);

    return this.http.get(GlobalVariables.baseUrl + 'signup');
  }

  getRequestOption(authorization: string) {
    const headers = {
      'Authorization' : 'Basic ' + authorization,
      'Content-Type': 'application/json'
    }

    return {
      headers : new HttpHeaders(headers),
    }
  }
}

