import {Injectable, OnInit} from '@angular/core';
import {Travel} from "../Models/travel.model";
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TravelsService{
  public travels: Travel[] = [];

  constructor(private httpClient: HttpClient) {}

  onInitTravels(travels: Travel[]) {
    this.travels = travels;
  }
  
  getTripById(id: string) {
    // TODO 
    // Need to do quert to API and get traval from database
    // return this.travels.filter(param => {
    //   return param.id == id;
    // })
    return this.httpClient.get("http://localhost:8080/api/getItem", { params: { id: id } });
  }

  getTravels() {
    return this.travels;
  }

  getFiltredTravels(country: string, count: number, _startDate, _endDate) {
    const startDate = new Date(_startDate);
    const endDate = new Date(_endDate);
    
    let filtredTravels = this.travels.slice();
    if (country) {
      filtredTravels = filtredTravels.filter(param => {
        return param.country.slice(0, country.length).toLocaleLowerCase() == country.toLocaleLowerCase();
      })
    }

    if (count) {
      filtredTravels = filtredTravels.filter(param => {
        return param.personsCount == count;
      })
    }

    if (_startDate) {
      filtredTravels = filtredTravels.filter(param => {
        return new Date(param.startDate) >= startDate;
      });
    }

    if (_endDate) {
      filtredTravels = filtredTravels.filter(param => {
        return new Date(param.endDate) <= endDate;
      })
    }

    return filtredTravels;
  }

  createNewTravel() {
    const travel = new Travel(null, "??????", 5, "Francja", "Położony w regionie Makadi z pięknym widokiem na zatokę, bezpośrednio przy piaszczystej plaży, jest idealnym miejscem na pełen relaks i udany odpoczynek. Przyjazna, relaksująca atmosfera i sympatyczny zespół animatorów zapewniają prawdziwie wakacyjny klimat i świetną zabawę, a amatorów nurkowania ucieszą dobre warunki i ładna rafa koralowa. Duży, zadbany basen ze zjeżdżalniami to doskonałe miejsce na słoneczne odprężenie i wodną zabawę. A na koniec nic tak nie poprawia humoru jak smakowity posiłek po dniu pełnym aktywności na świeżym powietrzu!", { name: "Dobry Hotel", stars: 4, description: "lorem ipsum"}, 1, "2020-03-11", "2020-03-14", ["Test attr", "Test attr 2", "Test attr 3", "Test attr 4"], ["https://wallpaperaccess.com/full/111778.jpg", "https://wallpaperaccess.com/full/111777.jpg", "https://media.holidayme.com/wp-content/uploads/2018/04/09113059/Holidayme_france_shutterstock_292335338.jpg"], 3000, "Samolot");
    this.httpClient.post("http://localhost:8080/api/test", travel)
      .subscribe(res => {
        console.log(res)
      })
  }
}
