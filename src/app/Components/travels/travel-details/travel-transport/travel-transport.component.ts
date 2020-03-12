import {Component, Input, OnInit} from '@angular/core';
import { faStar, faPlane, faMapMarkerAlt, faBus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-travel-transport',
  templateUrl: './travel-transport.component.html',
  styleUrls: ['./travel-transport.component.scss']
})
export class TravelTransportComponent implements OnInit {
  @Input() transport;
  faMap = faMapMarkerAlt;
  faTransport: any;

  constructor() { }

  ngOnInit() {
    this.faTransport = this.transport.type === "Samolot" ? faPlane : faBus;
  }

}
