import {Component, OnInit, ViewChild} from '@angular/core';
import {TravelsService} from '../../../Services/travels.service';
import {Travel} from '../../../Models/travel.model';
import {FormArray, FormBuilder} from "@angular/forms";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-travel-add',
  templateUrl: './travel-add.component.html',
  styleUrls: ['./travel-add.component.scss']
})
export class TravelAddComponent implements OnInit {
  travel: Travel;
  atut: string;
  files: File[] = [];
  urls: any[] = [];
  
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
    price: [''],
    transport: [''],
    hotel: this.formBuilder.group(({
      stars: [''],
      name: [''],
      description: ['']
    }))
  });

  constructor(private travelsService: TravelsService, private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
  }
  
  onAddTravel() { 
    this.travelsService.createNewTravel();
  }
  
  get atuts() {
    return this.travelForm.get("atuts") as FormArray;
  }
  
  onAddAtut(value) {
    this.atuts.push(this.formBuilder.control(value));
  }
  
  onChange(event) {
    let files = event.target.files;
    if (files) {
      this.files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        let reader = new FileReader();
        reader.onloadstart = (e) => {
          this.urls.push({result: '', loaded: false })
        };
        
        reader.onload = (e: any) => {
          this.urls[i] = { result: e.target.result, loaded: true };
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }
  
  onTest() {
    const formBody = new FormData();
    formBody.append("travel", JSON.stringify(this.travelForm.value));
    for (let file of this.files) {
      formBody.append('files', file);
    }
    this.http.post("http://localhost:8080/api/testImages", formBody, {
      reportProgress: true,
      responseType: 'text'
    })
      .subscribe(res => {
        console.log(res)
      })
  }

}
