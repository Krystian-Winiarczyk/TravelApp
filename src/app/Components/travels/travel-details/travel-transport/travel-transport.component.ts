import {Component, Input, OnInit} from '@angular/core';
import { faStar, faPlane, faMapMarkerAlt, faBus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-travel-transport',
  templateUrl: './travel-transport.component.html',
  styleUrls: ['./travel-transport.component.scss']
})
export class TravelTransportComponent implements OnInit {
  @Input() transport;
  @Input() country;
  faMap = faMapMarkerAlt;
  faTransport: any = faBus;

  constructor() { 
  }

  ngDoCheck() {
    console.log(this.country)
    if (this.transport)
      this.faTransport = this.transport === "Samolot" ? faPlane : faBus;
  }
  
  ngOnInit() {
  }

}
