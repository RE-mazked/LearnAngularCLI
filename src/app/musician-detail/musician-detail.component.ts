import { Component, OnInit, Input } from '@angular/core';
import {Musician} from "../Musician";

@Component({
  selector: 'app-musician-detail',
  templateUrl: './musician-detail.component.html',
  styleUrls: ['./musician-detail.component.css']
})
export class MusicianDetailComponent implements OnInit {
  @Input() musician?: Musician;

  constructor() { }

  ngOnInit(): void {
  }

}
