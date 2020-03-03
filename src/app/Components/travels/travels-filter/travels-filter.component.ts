import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TravelFilterModel} from '../../../Models/travel-filter.model';

@Component({
  selector: 'app-travels-filter',
  templateUrl: './travels-filter.component.html',
  styleUrls: ['./travels-filter.component.scss']
})
export class TravelsFilterComponent implements OnInit {
  country: string = "";
  count: number = 0;
  currentDate: Date = new Date();
  startDate: Date;
  endDate: Date;
  
  @Output() onFilterTravels: EventEmitter<TravelFilterModel> = new EventEmitter<TravelFilterModel>();
  
  constructor() { }

  ngOnInit() {
  }

  onChange() {
    this.onFilterTravels.emit(new TravelFilterModel(this.country, this.count, this.startDate, this.endDate));
  }
}
