import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {MusicianService} from "../musician.service";
import {Musician} from "../Musician";

@Component({
  selector: 'app-musician-detail',
  templateUrl: './musician-detail.component.html',
  styleUrls: ['./musician-detail.component.css']
})
export class MusicianDetailComponent implements OnInit {
  @Input() musician?: Musician;

  constructor(private route: ActivatedRoute, private musicianService: MusicianService, private location: Location) {
  }

  ngOnInit(): void {
    this.getMusician()
  }

  getMusician(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.musicianService.getMusician(id).subscribe(musician => this.musician = musician);
  }

  goBack(): void {
    this.location.back();
  }

}
