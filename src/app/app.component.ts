import {Component, OnInit} from '@angular/core';
import {Travel} from "./Models/travel.model";
import {TravelsService} from "./Services/travels.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
}
