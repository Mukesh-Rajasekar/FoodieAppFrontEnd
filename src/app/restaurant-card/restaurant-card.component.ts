import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent implements OnInit {
  rData: any[] = [];         
  filteredData: any[] = [];   
  locations: string[] = []; 

  constructor(
    private restaurantData: RestaurantServiceService,  
    private router: Router                              
  ) {}

  ngOnInit(): void {
    this.restaurantData.getRestaurant().subscribe(data => {
      this.rData = data;
      this.filteredData = data; 
      
      
      this.locations = [...new Set(data.map(restaurant => restaurant.location))];
    });
  }

  viewDetails(id: string): void {
    this.router.navigate(['/restaurant', id]); 
  }

  filterData(searchTerm: string): void {
    this.filteredData = this.rData.filter(restaurant =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  filterByLocation(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const location = selectElement.value;
    
    if (location) {
      this.filteredData = this.rData.filter(restaurant =>
        restaurant.location === location
      );
    } else {
      this.filteredData = this.rData;
    }
  }


  toggleFavorite(card: any, event: Event) {
    event.stopPropagation(); // Prevent click event from triggering card click
    card.isFavorited = !card.isFavorited;
  }

}
