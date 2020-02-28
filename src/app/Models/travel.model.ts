export class Travel {
  constructor(
    public id: string,
    public name: string,
    public personsCount: number,
    public country: string,
    public description: string,
    public hotelName: string,
    public tripStars: number,
    public startDate: number,
    public endDate: number,
    public actractions: string[],
    public imagesPaths: string[]
  ) {}
}
