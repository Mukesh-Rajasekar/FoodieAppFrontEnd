import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = "http://localhost:8765/api/v1/";
  loggedIn: boolean = false;

  constructor(private httpClient: HttpClient) {}

  // Method to generate a token by sending user credentials to the backend
  generateToken(user: User): Observable<any> {
    return this.httpClient.post<any>(this.url + 'login', user);
  }

  // Method to log in the user by storing the token and updating the logged-in status
  loginUser(token: string): boolean {
    localStorage.setItem('token', token); // Store the token in local storage
    this.loggedIn = true; // Set the loggedIn status to true
    return true;
  }

  // Method to retrieve the token from local storage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Method to log out the user by removing the token and updating the logged-in status
  logout(): void {
    localStorage.removeItem('token'); // Remove the token from local storage
    this.loggedIn = false; // Set the loggedIn status to false
  }

  // Method to check if the user is logged in by verifying the token's presence
  isLoggedIn(): boolean {
    const token = this.getToken();
    return !(token == undefined || token === '' || token == null);
  }
}
