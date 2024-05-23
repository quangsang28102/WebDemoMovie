import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/models/IMovie/IMovie.model';
import { DataPopularMovieService } from 'src/app/service/data-popular-movie.service';

@Component({
  selector: 'app-right-card2',
  templateUrl: './right-card2.component.html',
  styleUrls: ['./right-card2.component.css']
})
export class RightCard2Component {
  dataPopularPlaying2: IMovie[] = [];

  constructor(
    private dataPopularPlayingService2: DataPopularMovieService,
  ) {}

  ngOnInit() {    
    
    this.dataPopularPlayingService2.getData().subscribe((res) => {
      this.dataPopularPlaying2 = res.results.slice(1, 3);
      console.log(res)
    }); 
  }
}
