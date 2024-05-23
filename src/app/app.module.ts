import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuLeftComponent } from './shared/menu-left/menu-left.component';
import { BodyComponent } from './shared/body/body.component';
import { BannerComponent } from './body/banner/banner.component';
import { MovieCardComponent } from './body/stream-movies/movie-card/movie-card.component';
import { StreamMoviesComponent } from './body/stream-movies/stream-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuRightComponent } from './shared/menu-right/menu-right.component';
import { SearchComponent } from './shared/menu-right/search/search.component';
import { FormsModule } from '@angular/forms';
import { MovieRightCardComponent } from './shared/menu-right/movie-right-card/movie-right-card.component';
import {  RouterModule, Routes } from '@angular/router';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FooterComponent } from './shared/footer/footer.component';
import { LatedTrailerComponent } from './lated-trailer/lated-trailer.component';
import { CastComponent } from './cast/cast.component';
import { RightCard2Component } from './shared/menu-right/right-card2/right-card2.component';
import { PeopleComponent } from './people/people.component';

const appRouters: Routes = [
  {path: 'home', component:BodyComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '', component:BodyComponent},
  {path: 'movies', component:StreamMoviesComponent},
  {path: 'movie/:id', component:DetailMovieComponent},
  {path: 'peoples', component:PeopleComponent},
  {path: '**', component:BodyComponent},

  

]
@NgModule({
  declarations: [
    AppComponent,
    MenuLeftComponent,
    BodyComponent,
    BannerComponent,
    MovieCardComponent,
    StreamMoviesComponent,
    MenuRightComponent,
    SearchComponent,
    MovieRightCardComponent,
    DetailMovieComponent,
    FooterComponent,
    LatedTrailerComponent,
    CastComponent,
    RightCard2Component,
    PeopleComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    YouTubePlayerModule,
    RouterModule.forRoot(appRouters),    
  ],
  //declarations: [ CarouselHolderComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
