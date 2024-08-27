import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {
  private baseUrl = 'http://localhost:3000/restaurants';

  constructor(private http: HttpClient) { }

 
  getRestaurant(): Observable<any[]> {
    console.log("Fetching all restaurants");
    return this.http.get<any[]>(this.baseUrl);
  }

 
  getRestaurantById(id: string): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    console.log(`Fetching restaurant with ID: ${id}`);
    return this.http.get<any>(url);
  }
}
