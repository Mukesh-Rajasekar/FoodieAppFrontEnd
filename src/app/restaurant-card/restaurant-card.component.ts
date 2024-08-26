import { Component } from '@angular/core';
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.css'
})
export class RestaurantCardComponent {
  rData:any[] = [];
  constructor(private restaurantData:RestaurantServiceService){}

  ngOnInit(): void {
    console.log("working");
    this.restaurantData.getRestaurant().subscribe(data => {
      this.rData = data;
    });
  }

}
