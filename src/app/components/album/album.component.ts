import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../spotify.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { AlbumTracks } from '../../interfaces/album-tracks';
import { Album } from 'src/app/interfaces/album';
import { Track, Tracks } from '../../interfaces/tracks';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styles: [
  ]
})
export class AlbumComponent implements OnInit {
  album!:Album;
  tracks:Track[]=[];
  loadingArtist: boolean;

  constructor(private route:ActivatedRoute,private service: SpotifyService) {
    this.loadingArtist = true;

    this.route.params.subscribe( params => {
      this.getArtista( params['id'] );
      this.getTopTracks( params['id'] );
    });
  }

  ngOnInit(): void {
  }

  getArtista( id: string ) {

    this.loadingArtist = true;

    this.service.getAlbum( id )
          .subscribe( album => {
            console.log(album);
            this.album = album;

            this.loadingArtist = false;
          });

  }

  getTopTracks( id: string ) {

    this.service.getTracks( id )
            .subscribe( tracks => {
              console.log(tracks);
              //this.tracks = tracks;
            });

  }
}
