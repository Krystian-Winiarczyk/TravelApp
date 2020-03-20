import {Component, Input, OnInit} from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-travel-desc',
  templateUrl: './travel-desc.component.html',
  styleUrls: ['./travel-desc.component.scss']
})
export class TravelDescComponent implements OnInit {
  @Input() travel?;
  stars?: number[];
  faStar = faStar;

  constructor() {
  }

  ngDoCheck() {
    if (this.travel)
      this.stars = Array(this.travel.tripStars);
  }
  
  ngOnInit() {

  }

}
