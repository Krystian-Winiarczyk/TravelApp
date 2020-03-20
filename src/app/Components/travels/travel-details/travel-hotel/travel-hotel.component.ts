import {Component, Input, OnInit} from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-travel-hotel',
  templateUrl: './travel-hotel.component.html',
  styleUrls: ['./travel-hotel.component.scss']
})
export class TravelHotelComponent implements OnInit {
  @Input() hotel;
  hotelStars: number[];
  faStar = faStar;
  
  constructor() { }
  
  ngDoCheck() {
    if (this.hotel)
    this.hotelStars = Array(this.hotel.stars);
  }

  ngOnInit() { }

}
