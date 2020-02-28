import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TravelsService} from "../../Services/travels.service";
import {Travel} from "../../Models/travel.model";

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.scss']
})
export class TravelDetailsComponent implements OnInit {
  travel: Travel;

  constructor(
    private ar: ActivatedRoute,
    private travelsService: TravelsService
  ) { }

  ngOnInit() {
    this.ar.params.subscribe(param => {
      this.travel = this.travelsService.getTripById(param.id)[0];
    })
  }

  onClick() {
    console.log(this.travel)
  }
}
