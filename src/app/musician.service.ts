import {Injectable} from '@angular/core';
import {Musician} from "./Musician";
import {MUSICIANS} from "./mock-musicians";
import {Observable, of} from "rxjs";
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MusicianService {
  getMusicians(): Observable<Musician[]> {
    const musician = of(MUSICIANS);
    this.messageService.add('MusicianService: fetched musicians')
    return musician;
  }
  getMusician(id: number): Observable<Musician> {
    const musician = MUSICIANS.find(h => h.id === id)!;
    this.messageService.add(`MusicianService: fetched musician id=${id}`);
    return of(musician);
  }
  constructor(private messageService: MessageService) {
  }
}
