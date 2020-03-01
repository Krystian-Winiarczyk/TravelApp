import {Injectable} from '@angular/core';
import {Travel} from "../Models/travel.model";

@Injectable({
  providedIn: 'root'
})
export class TravelsService {
  travels: Travel[] = [
    new Travel("m2omgm3gmdsml", "???", 2, "Egipt", "Położony w regionie Makadi z pięknym widokiem na zatokę, bezpośrednio przy piaszczystej plaży, jest idealnym miejscem na pełen relaks i udany odpoczynek. Przyjazna, relaksująca atmosfera i sympatyczny zespół animatorów zapewniają prawdziwie wakacyjny klimat i świetną zabawę, a amatorów nurkowania ucieszą dobre warunki i ładna rafa koralowa. Duży, zadbany basen ze zjeżdżalniami to doskonałe miejsce na słoneczne odprężenie i wodną zabawę. A na koniec nic tak nie poprawia humoru jak smakowity posiłek po dniu pełnym aktywności na świeżym powietrzu!", "Hotel Prima Life Makadi", 5, "2020-03-12", "2020-03-16", ["Test attr", "Test attr 2", "Test attr 3", "Test attr 4"], ["https://ocdn.eu/pulscms-transforms/1/mn7k9kuTURBXy9hNjFiYjE2NS0yNjBhLTRiZGQtYmU5Ny1kNTU2MWExMGJjYzEuanBlZ5GVAs0DBwDDw4GhMAE", "https://dziendobry.tvn.pl/media/cache/content_cover/xgettyimages-531252132-jpg.jpg.pagespeed.ic.icMi4w-HJg.jpg", "https://media.wplm.pl/thumbs/NzIweDQ0Mi9jX2MvdV8xL2NjX2M5MWYwL3AvMjAxOS8xMi8yNi85NDgvNTMyLzYxMzYxYTNkY2Y0MDQ1MDBhYTQzM2NjMjVjM2JiOTUxLmpwZWc=.jpeg"]),
    
    new Travel("oiwmgrom4309i2039", "????", 2, "Polska", "Położony w regionie Makadi z pięknym widokiem na zatokę, bezpośrednio przy piaszczystej plaży, jest idealnym miejscem na pełen relaks i udany odpoczynek. Przyjazna, relaksująca atmosfera i sympatyczny zespół animatorów zapewniają prawdziwie wakacyjny klimat i świetną zabawę, a amatorów nurkowania ucieszą dobre warunki i ładna rafa koralowa. Duży, zadbany basen ze zjeżdżalniami to doskonałe miejsce na słoneczne odprężenie i wodną zabawę. A na koniec nic tak nie poprawia humoru jak smakowity posiłek po dniu pełnym aktywności na świeżym powietrzu!", "Hotel Prima Life Makadi", 4, "2020-03-12", "2020-03-29", ["Test attr", "Test attr 2", "Test attr 3", "Test attr 4"], ["https://dag08uxs564ub.cloudfront.net/images/Pieniny_mountains_in_Poland_-_view_on_Tatras.width-1200.jpg", "https://wallpaperaccess.com/full/370035.jpg", "https://jakubpolomski.com/wp-content/uploads/2018/01/Poland-Landscape-Photo-Jakub-Polomski-12BSK0012.jpg"]),
    
    new Travel("sdffew342", "????", 6, "Tester", "Położony w regionie Makadi z pięknym widokiem na zatokę, bezpośrednio przy piaszczystej plaży, jest idealnym miejscem na pełen relaks i udany odpoczynek. Przyjazna, relaksująca atmosfera i sympatyczny zespół animatorów zapewniają prawdziwie wakacyjny klimat i świetną zabawę, a amatorów nurkowania ucieszą dobre warunki i ładna rafa koralowa. Duży, zadbany basen ze zjeżdżalniami to doskonałe miejsce na słoneczne odprężenie i wodną zabawę. A na koniec nic tak nie poprawia humoru jak smakowity posiłek po dniu pełnym aktywności na świeżym powietrzu!", "Tester", 5, "2020-04-01", "2020-04-12", ["Test attr", "Test attr 2", "Test attr 3", "Test attr 4"], ["https://itbrief.com.au/uploads/story/2018/11/26/ThinkstockPhotos-1054955998.jpg"]),
    
    new Travel("432-gefgkemr23", "?????", 4, "Portugalia", "Położony w regionie Makadi z pięknym widokiem na zatokę, bezpośrednio przy piaszczystej plaży, jest idealnym miejscem na pełen relaks i udany odpoczynek. Przyjazna, relaksująca atmosfera i sympatyczny zespół animatorów zapewniają prawdziwie wakacyjny klimat i świetną zabawę, a amatorów nurkowania ucieszą dobre warunki i ładna rafa koralowa. Duży, zadbany basen ze zjeżdżalniami to doskonałe miejsce na słoneczne odprężenie i wodną zabawę. A na koniec nic tak nie poprawia humoru jak smakowity posiłek po dniu pełnym aktywności na świeżym powietrzu!", "Hotel Prima Life Makadi", 3, "2020-04-04", "2020-04-15", ["Test attr", "Test attr 2", "Test attr 3", "Test attr 4"], ["https://wallpaperaccess.com/full/469970.jpg", "https://www.portugal-live.net/images/rotator/251-physical-geography-a.jpg", "https://www.messagez.com/wp-content/gallery/portugal/best-of-algarve-portugal-photography-20-by-messagez-com_.jpg"]),
    
    new Travel("dfgoen-3435", "??????", 5, "Francja", "Położony w regionie Makadi z pięknym widokiem na zatokę, bezpośrednio przy piaszczystej plaży, jest idealnym miejscem na pełen relaks i udany odpoczynek. Przyjazna, relaksująca atmosfera i sympatyczny zespół animatorów zapewniają prawdziwie wakacyjny klimat i świetną zabawę, a amatorów nurkowania ucieszą dobre warunki i ładna rafa koralowa. Duży, zadbany basen ze zjeżdżalniami to doskonałe miejsce na słoneczne odprężenie i wodną zabawę. A na koniec nic tak nie poprawia humoru jak smakowity posiłek po dniu pełnym aktywności na świeżym powietrzu!", "Hotel Prima Life Makadi", 1, "2020-03-11", "2020-03-14", ["Test attr", "Test attr 2", "Test attr 3", "Test attr 4"], ["https://wallpaperaccess.com/full/111778.jpg", "https://wallpaperaccess.com/full/111777.jpg", "https://media.holidayme.com/wp-content/uploads/2018/04/09113059/Holidayme_france_shutterstock_292335338.jpg"])
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
}
