import { Component, Input, OnInit } from '@angular/core';
import { DataNowPlayingService } from 'src/app/service/nowPlayingData.service';
import { IMovie } from 'src/models/IMovie/IMovie.model';
import { TopRatedService } from '../../service/top-rated-data.service';

@Component({
  selector: 'app-stream-movies',
  templateUrl: './stream-movies.component.html',
  styleUrls: ['./stream-movies.component.css']
})
export class StreamMoviesComponent implements OnInit {
   dataNowPlaying: IMovie[] = [];
   dataTopRated: IMovie[] = [];
  constructor(
    private dataNowPlayingService: DataNowPlayingService,
    private dataTopRatedService: TopRatedService
  ) {}
  ngOnInit() {
    this.dataNowPlayingService.getData().subscribe((res) => {
      this.dataNowPlaying = res.results;
      console.log('test data',this.dataNowPlaying)
    }); 
    this.dataTopRatedService.getData().subscribe((res) => {
      this.dataTopRated = res.results;
      console.log('res',res)
    });     
  }  
}
