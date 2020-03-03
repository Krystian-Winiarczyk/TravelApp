import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TravelDetailsComponent } from './Components/travel-details/travel-details.component';
import { RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import {FormsModule} from "@angular/forms";
import { CarouselComponent } from './Components/carousel/carousel.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { TravelAddComponent } from './Components/travel-add/travel-add.component';

const routers: Routes = [
  { path: "", component: HomeComponent },
  { path: "travel/add", component: TravelAddComponent },
  { path: "travel/:id", component: TravelDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TravelDetailsComponent,
    HomeComponent,
    HeaderComponent,
    CarouselComponent,
    TravelAddComponent
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
