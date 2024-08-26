import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {
  private data = 'assets/restaurantData.json'

  constructor(private http:HttpClient) { }

  getRestaurant(): Observable<any[]> {
    console.log("inside working")
    console.log(this.http.get<any[]>(this.data));
    return this.http.get<any[]>(this.data);
  }


}
