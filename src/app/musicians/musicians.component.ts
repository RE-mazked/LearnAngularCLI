import {Component, OnInit} from '@angular/core';
import {Musician} from "../Musician";
import {MusicianService} from "../musician.service"
import { MessageService } from '../message.service';


@Component({
  selector: 'app-musicians',
  templateUrl: './musicians.component.html',
  styleUrls: ['./musicians.component.css']
})
export class MusiciansComponent implements OnInit {
  musicians: Musician[] = [];

  selectedMusician?: Musician;

  getMusicians(): void {
    this.musicianService.getMusicians().subscribe(musicians => this.musicians = musicians)
  }

  constructor(private musicianService: MusicianService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getMusicians()
  }


}
