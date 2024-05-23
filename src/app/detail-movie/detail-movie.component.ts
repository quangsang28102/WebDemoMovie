import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { IDetailMovie } from 'src/models/IDetailMovie/IDetailMovie.model';
import { DetailMovieService } from '../service/detail-movie.service';
import { DetailInforService } from '../service/detail-infor.service';
@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit {
  dataDetailMovie: IDetailMovie[] = [];
  id: string | null = null;
  backdrop_path:string = '';
  overview: string = '';
  genres: any;
  poster_path: string = '';
  tagline: string = '';
  title: string = '';
  release_date: string = '';
  vote_average: string= '';    
  constructor(
    private route: ActivatedRoute,
    private dataDetailMovieService: DetailMovieService,
    private dataInforService: DetailInforService,   
  ) { }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');  
    // Lấy dữ liệu từ dataDetailMovieService
    this.dataDetailMovieService.getData(this.id!).subscribe((res) => {
      this.dataDetailMovie = res.results.slice(0, 1);
      console.log(this.dataDetailMovie);
    });  
    // Lấy dữ liệu từ dataInforService
    this.dataInforService.getData(this.id!).subscribe((res) => {   
      this.backdrop_path = res.backdrop_path
      this.overview = res.overview
      this.genres = res.genres
      this.poster_path = res.poster_path
      this.tagline = res.tagline
      this.title = res.title
      this.release_date = res.release_date
      this.vote_average = res.vote_average
    });         
  }
  isCodeVisible = false;

  toggleCodeVisibility() {
    this.isCodeVisible = !this.isCodeVisible;
  }
}
