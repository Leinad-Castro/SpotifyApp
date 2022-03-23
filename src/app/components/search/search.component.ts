import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/SearchArtista';
import { SpotifyService } from '../../spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent  {

  constructor(private service:SpotifyService) { }
  artists:Item[]=[];
  search(argumento:string){

    if (argumento.trim().length == 0) {return}
    this.service.searchArtist(argumento)
      .subscribe(data=>
        {
          this.artists =data;
          console.log(data);
        });
  }
}
