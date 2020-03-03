import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TravelDetailsComponent } from './Components/travels/travel-details/travel-details.component';
import { RouterModule, Routes} from "@angular/router";
import { HeaderComponent } from './Components/header/header.component';
import {FormsModule} from "@angular/forms";
import { CarouselComponent } from './Components/carousel/carousel.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { TravelAddComponent } from './Components/travels/travel-add/travel-add.component';
import { TravelsComponent } from './Components/travels/travels.component';
import { TravelsFilterComponent } from './Components/travels/travels-filter/travels-filter.component';

const routers: Routes = [
  { path: "", component: TravelsComponent },
  { path: "travel/add", component: TravelAddComponent },
  { path: "travel/:id", component: TravelDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TravelDetailsComponent,
    HeaderComponent,
    CarouselComponent,
    TravelAddComponent,
    TravelsComponent,
    TravelsFilterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routers),
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
