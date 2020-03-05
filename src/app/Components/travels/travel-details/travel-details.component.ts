import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TravelsService} from "../../../Services/travels.service";
import {Travel} from "../../../Models/travel.model";
import { faStar, faPlane, faMapMarkerAlt, faBus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.scss']
})
export class TravelDetailsComponent implements OnInit {
  travel: Travel;
  stars: number[];
  faStar = faStar;
  faPlane = faPlane;
  faMap = faMapMarkerAlt;
  faBus = faBus;

  constructor(
    private ar: ActivatedRoute,
    private travelsService: TravelsService
  ) { }

  ngOnInit() {
    this.ar.params.subscribe(param => {
      this.travel = this.travelsService.getTripById(param.id)[0];
    });
    this.stars = Array(this.travel.tripStars);
  }

  onClick() {
    console.log(this.travel)
  }
}
