import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { SpotifyService } from '../../spotify.service';
import { AlbumItem } from '../../interfaces/albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styles: [
  ]
})
export class AlbumsComponent implements OnInit {
  albums:AlbumItem[]=[];
  constructor(private activateRoute:ActivatedRoute,
    private service:SpotifyService) {
    this.activateRoute.params
    .pipe(
      switchMap(({id})=> this.service.getAlbums(id)),tap(console.log)
    ).subscribe(albums=> this.albums = albums )
  }

  ngOnInit(): void {
  }

}
