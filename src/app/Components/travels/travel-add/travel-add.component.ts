import {Component, OnInit, ViewChild} from '@angular/core';
import {TravelsService} from '../../../Services/travels.service';
import {Travel} from '../../../Models/travel.model';
import {FormArray, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-travel-add',
  templateUrl: './travel-add.component.html',
  styleUrls: ['./travel-add.component.scss']
})
export class TravelAddComponent implements OnInit {
  travel: Travel;
  atut: string;
  files: File[] = [];
  
  travelForm = this.formBuilder.group({
    name: [''],
    personsCount: [''],
    country: [''],
    description: [''],
    tripStars: [''],
    startDate: [''],
    endDate: [''],
    atuts: this.formBuilder.array(
      [this.formBuilder.control('')]
    ),
    imagesPaths: this.formBuilder.array(
      [this.formBuilder.control('')]
    ),
    price: [''],
    transport: [''],
    hotel: this.formBuilder.group(({
      stars: [''],
      name: [''],
      description: ['']
    }))
  });

  constructor(private travelsService: TravelsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }
  
  onAddTravel() { 
    this.travelsService.createNewTravel();
  }
  
  get atuts() {
    return this.travelForm.get("atuts") as FormArray;
  }
  
  onAddAtut() {
    this.atuts.push(this.formBuilder.control('ssadasd'));
  }
  
  onChange(event) {
    console.log(event.target.files);
    this.files = event.target.files;
  }

}
