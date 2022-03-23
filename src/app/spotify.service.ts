import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {  SearchArtist} from './interfaces/SearchArtista';
import { map } from 'rxjs/operators';
import { ArgumentOutOfRangeError, Observable } from 'rxjs';
import { Albums, AlbumItem } from './interfaces/albums';
import { AlbumTracks } from './interfaces/album-tracks';
import { Album, Tracks } from './interfaces/album';
import { TracksDetaill } from 'src/app/interfaces/track-detail';
import { Track } from './interfaces/tracks';
import { NewReleaces } from './interfaces/new-releaces';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  url:string ='https://api.spotify.com/v1/';
  constructor(
    private http:HttpClient,
  ) {}

  get headers(){
    return new HttpHeaders({'Authorization':'Bearer BQB05TJurubTFDfG7ImWuz7f6aZHTE26eiyKDpp98NzP5yVRoXpBDx_ab7PQiVNKETbYD39YglMelkjSs3s'});
  }

  getNewReleaces(){
    return this.http.get<NewReleaces>(`${this.url}browse/new-releases?country=mx`,{'headers':this.headers})
      //.subscribe(data=> console.log(data));
    .pipe(map(data=>data.albums.items));
  }
   searchArtist(argumento:string){
     return this.http.get<SearchArtist>(`${this.url}search?q=${argumento}&type=artist&limit=15`,{'headers':this.headers})
           .pipe(map(data=>data.artists.items));
   }

   getAlbums(identificador:string){//	https://api.spotify.com/v1/artists/6eUKZXaKkcviH0Ku9w2n3V/albums
     return this.http.get<Albums>(`${this.url}artists/${identificador}/albums`,{'headers':this.headers})
       .pipe(map(data=> data.items));
   }

   getAlbum(identificador:string){//artists/6eUKZXaKkcviH0Ku9w2n3V/top-tracks?country=us
    return this.http.get<Album>(`${this.url}albums/${identificador}`,{'headers':this.headers})
      .pipe(map(data=> data));
  }

  getTracks(identificador:string){
    return this.http.get<Tracks>(`${this.url}artists/${identificador}/top-tracks?country=us`,{'headers':this.headers})
      .pipe(map(data=> data));
  }


}


