import { Component, OnInit } from '@angular/core';
import {TravelsService} from '../../../Services/travels.service';
import {Travel} from '../../../Models/travel.model';

@Component({
  selector: 'app-travel-add',
  templateUrl: './travel-add.component.html',
  styleUrls: ['./travel-add.component.scss']
})
export class TravelAddComponent implements OnInit {
  travel: Travel;

  constructor(private travelsService: TravelsService) { }

  ngOnInit() {
  }
  
  onAddTravel() {
    const newTravel = this.travel;
  }

}
