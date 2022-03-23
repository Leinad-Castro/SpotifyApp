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
  error: boolean;
  mensajeError!: string;
  newReleaces: Item[]=[];

  constructor(private services:SpotifyService) {
    this.error = false
    //console.log("contructor inicializado");
    this.services.getNewReleaces()
      .subscribe(data=> this.newReleaces= data ,
        (errorServices)=>{
          this.error = true;
          console.log(errorServices);
          this.mensajeError = errorServices.error.error.message;


        });
  }

  ngOnInit(): void {
  }
}
