export class TravelFilterModel {
  constructor(
    public country: string,
    public count: number,
    public startDate: Date,
    public endDate: Date
  ) {
  }
}
