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

  constructor(private messageService: MessageService) {
  }
}
