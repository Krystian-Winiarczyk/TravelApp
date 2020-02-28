import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TravelDetailsComponent } from './Components/travel-details/travel-details.component';
import { RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import {FormsModule} from "@angular/forms";

const routers: Routes = [
  { path: "", component: HomeComponent },
  { path: "travel/:id", component: TravelDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TravelDetailsComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routers),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
