import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/new-releaces';
import { SpotifyService } from '../../spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  newReleaces: Item[]=[];

  constructor(private services:SpotifyService) {
    //console.log("contructor inicializado");
    this.services.getNewReleaces()
      .subscribe(data=> this.newReleaces= data );
  }

  ngOnInit(): void {
  }
}
