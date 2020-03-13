import {Component, OnInit} from '@angular/core';
import {Travel} from '../../Models/travel.model';
import {TravelsService} from '../../Services/travels.service';
import {TravelFilterModel} from '../../Models/travel-filter.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent implements OnInit {
  travels: Travel[] = [];

  constructor(private travelsService: TravelsService, private router: Router) {}

  ngOnInit() {
    this.travels = this.travelsService.getTravels();
  }
  
  onChange(event: TravelFilterModel) {
    if (
      event.country ||
      event.count ||
      event.startDate ||
      event.endDate
    ) this.travels = this.travelsService.getFiltredTravels(event.country, event.count, event.startDate, event.endDate);
    else
      this.travels = this.travelsService.getTravels();
  }
  
  onRedirectToTravelDetails(id: String) {
    this.router.navigate(["/travel"], { queryParams: { id: id } })
  }

}
