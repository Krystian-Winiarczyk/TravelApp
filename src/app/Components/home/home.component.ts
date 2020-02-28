import { Component, OnInit } from '@angular/core';
import {Travel} from "../../Models/travel.model";
import {TravelsService} from "../../Services/travels.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  country: string = "";
  count: number = 0;
  travels: Travel[] = [];

  constructor(private travelsService: TravelsService) {}

  ngOnInit() {
    this.travels = this.travelsService.getTravels();
  }

  onChange() {
    if (this.country !== "" || (this.count !== 0 && this.count !== null))
      this.travels = this.travelsService.getFiltredTravels(this.country, this.count);
    else
      this.travels = this.travelsService.getTravels();
  }

}
