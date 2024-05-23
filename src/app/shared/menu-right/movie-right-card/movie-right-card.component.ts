import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/models/IMovie/IMovie.model';
import { DataPopularMovieService } from 'src/app/service/data-popular-movie.service';

@Component({
  selector: 'app-movie-right-card',
  templateUrl: './movie-right-card.component.html',
  styleUrls: ['./movie-right-card.component.css']
})
export class MovieRightCardComponent implements OnInit{

  dataPopularPlaying: IMovie[] = [];
  dataPopularPlaying2: IMovie[] = [];

  constructor(
    private dataPopularPlayingService: DataPopularMovieService,
    private dataPopularPlayingService2: DataPopularMovieService,
  ) {}

  ngOnInit() {
    this.dataPopularPlayingService.getData().subscribe((res) => {
      this.dataPopularPlaying = res.results.slice(4, 6);
      console.log(res)
    }); 
    
    this.dataPopularPlayingService2.getData().subscribe((res) => {
      this.dataPopularPlaying2 = res.results.slice(1, 3);
      console.log(res)
    }); 
  }
}
