import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:string="http://localhost:8765/api/v1/"
  constructor(private httpClient:HttpClient) { }

  loggedIn=false;

  generateToken(user: User): Observable<any> {
    
    return this.httpClient.post<any>(this.url + 'login', user);
  }

  loginUser(token: any) {
    localStorage.setItem('token', token); // api+token
   
    this.loggedIn=true;
    return true;
}

getToken() {
  return localStorage.getItem('token');
}

logout()
  {
    this.loggedIn=false;
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');
    if (token == undefined || token === '' || token == null) {
      return false;
    } else {
      return true;
    }
  }



}
