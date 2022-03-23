import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { AlbumComponent } from './components/album/album.component';
import { AlbumsComponent } from './components/albums/albums.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'search',component:SearchComponent},
  {path:'albums/:id',component:AlbumsComponent},
  {path:'album/:id',component:AlbumComponent},
  {path:'**',redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
