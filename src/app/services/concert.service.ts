import {Injectable} from '@angular/core';

export interface ConcertInterface {
  id: number;
  bandName: string;
  concertDate: Date;
  genre: string;
  rating: number;
  location: {
    name: string;
    city: string;
  };
  comment: string;
};

@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  private concertList: ConcertInterface[] = [
    {
      id: new Date().getTime(),
      bandName: 'Linkin Park',
      concertDate: new Date('2021-06-20'),
      genre: 'Metal',
      rating: 5,
      location: {
        name: 'la cigale',
        city: 'paris'
      },
      comment: 'I will join'
    }
  ];

  constructor() {
  }

  public getConcertList(): ConcertInterface[] {
    return this.concertList;
  }

}
