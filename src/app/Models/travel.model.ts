import {Hotel} from './hotel.model';

export class Travel {
  constructor(
    public name: string,
    public personsCount: number,
    public country: string,
    public description: string,
    public hotel: Hotel,
    public tripStars: number,
    public startDate: string,
    public endDate: string,
    public atuts: string[],
    public price: number,
    public transport: string,
    public id?: string,
  ) {}
}
