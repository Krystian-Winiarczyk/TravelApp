import {Injectable} from '@angular/core';
import {Travel} from "../Models/travel.model";

@Injectable({
  providedIn: 'root'
})
export class TravelsService {
  travels: Travel[] = [
    new Travel("m2omgm3gmdsml", "???", 2, "Egipt", "Położony w regionie Makadi z pięknym widokiem na zatokę, bezpośrednio przy piaszczystej plaży, jest idealnym miejscem na pełen relaks i udany odpoczynek. Przyjazna, relaksująca atmosfera i sympatyczny zespół animatorów zapewniają prawdziwie wakacyjny klimat i świetną zabawę, a amatorów nurkowania ucieszą dobre warunki i ładna rafa koralowa. Duży, zadbany basen ze zjeżdżalniami to doskonałe miejsce na słoneczne odprężenie i wodną zabawę. A na koniec nic tak nie poprawia humoru jak smakowity posiłek po dniu pełnym aktywności na świeżym powietrzu!", "Hotel Prima Life Makadi", 5, 4, 5, [], ["https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM3Njd9&w=1000&q=80"]),
    new Travel("oiwmgrom4309i2039", "????", 2, "Polska", "Położony w regionie Makadi z pięknym widokiem na zatokę, bezpośrednio przy piaszczystej plaży, jest idealnym miejscem na pełen relaks i udany odpoczynek. Przyjazna, relaksująca atmosfera i sympatyczny zespół animatorów zapewniają prawdziwie wakacyjny klimat i świetną zabawę, a amatorów nurkowania ucieszą dobre warunki i ładna rafa koralowa. Duży, zadbany basen ze zjeżdżalniami to doskonałe miejsce na słoneczne odprężenie i wodną zabawę. A na koniec nic tak nie poprawia humoru jak smakowity posiłek po dniu pełnym aktywności na świeżym powietrzu!", "Hotel Prima Life Makadi", 5, 4, 5, [], ["https://i.pinimg.com/originals/14/81/c4/1481c418f171a86bf5d8f622aafb3b42.jpg"]),
    new Travel("sdffew342", "????", 6, "Polska", "Położony w regionie Makadi z pięknym widokiem na zatokę, bezpośrednio przy piaszczystej plaży, jest idealnym miejscem na pełen relaks i udany odpoczynek. Przyjazna, relaksująca atmosfera i sympatyczny zespół animatorów zapewniają prawdziwie wakacyjny klimat i świetną zabawę, a amatorów nurkowania ucieszą dobre warunki i ładna rafa koralowa. Duży, zadbany basen ze zjeżdżalniami to doskonałe miejsce na słoneczne odprężenie i wodną zabawę. A na koniec nic tak nie poprawia humoru jak smakowity posiłek po dniu pełnym aktywności na świeżym powietrzu!", "Hotel Prima Life Makadi", 5, 4, 5, [], ["https://i.pinimg.com/originals/14/81/c4/1481c418f171a86bf5d8f622aafb3b42.jpg"]),
    new Travel("432-gefgkemr23", "?????", 4, "Portugalia", "Położony w regionie Makadi z pięknym widokiem na zatokę, bezpośrednio przy piaszczystej plaży, jest idealnym miejscem na pełen relaks i udany odpoczynek. Przyjazna, relaksująca atmosfera i sympatyczny zespół animatorów zapewniają prawdziwie wakacyjny klimat i świetną zabawę, a amatorów nurkowania ucieszą dobre warunki i ładna rafa koralowa. Duży, zadbany basen ze zjeżdżalniami to doskonałe miejsce na słoneczne odprężenie i wodną zabawę. A na koniec nic tak nie poprawia humoru jak smakowity posiłek po dniu pełnym aktywności na świeżym powietrzu!", "Hotel Prima Life Makadi", 5, 4, 5, [], ["https://upload.wikimedia.org/wikipedia/commons/2/2c/NZ_Landscape_from_the_van.jpg"]),
    new Travel("dfgoen-3435", "??????", 5, "Francja", "Położony w regionie Makadi z pięknym widokiem na zatokę, bezpośrednio przy piaszczystej plaży, jest idealnym miejscem na pełen relaks i udany odpoczynek. Przyjazna, relaksująca atmosfera i sympatyczny zespół animatorów zapewniają prawdziwie wakacyjny klimat i świetną zabawę, a amatorów nurkowania ucieszą dobre warunki i ładna rafa koralowa. Duży, zadbany basen ze zjeżdżalniami to doskonałe miejsce na słoneczne odprężenie i wodną zabawę. A na koniec nic tak nie poprawia humoru jak smakowity posiłek po dniu pełnym aktywności na świeżym powietrzu!", "Hotel Prima Life Makadi", 5, 4, 5, [], ["https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg"])
  ];

  constructor() {
  }

  getTripById(id: string) {
    return this.travels.filter(param => {
      return param.id == id;
    })
  }

  getTravels() {
    return this.travels;
  }

  getFiltredTravels(country: string, count: number) {
    let filtredTravels = this.travels.slice();
    if (country !== "") {
      filtredTravels = filtredTravels.filter(param => {
        return param.country.slice(0, country.length).toLocaleLowerCase() == country.toLocaleLowerCase();
      })
    }

    if (count !== 0) {
      filtredTravels = filtredTravels.filter(param => {
        return param.personsCount == count;
      })
    }

    return filtredTravels;
  }
}
