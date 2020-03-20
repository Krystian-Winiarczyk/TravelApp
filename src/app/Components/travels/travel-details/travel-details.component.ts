import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TravelsService} from "../../../Services/travels.service";
import {Travel} from "../../../Models/travel.model";

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.scss']
})
export class TravelDetailsComponent {
  travel?: Travel;

  constructor(
    private ar: ActivatedRoute,
    private travelsService: TravelsService
  ) {
    
  }

  ngOnInit() {
    this.ar.queryParams.subscribe(param => {
      this.travelsService.getTripById(param.id).subscribe(res => {
        console.log(res as Travel)
        this.travel = res as Travel;
      });
    });
  }

}
