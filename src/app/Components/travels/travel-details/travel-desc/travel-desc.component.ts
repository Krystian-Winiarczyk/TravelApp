import {Component, Input, OnInit} from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-travel-desc',
  templateUrl: './travel-desc.component.html',
  styleUrls: ['./travel-desc.component.scss']
})
export class TravelDescComponent implements OnInit {
  @Input() travel: { description, personsCount, name, price, atuts, tripStars };
  stars: number[];
  faStar = faStar;

  constructor() { }

  ngOnInit() {
    this.stars = Array(this.travel.tripStars);
  }

}
