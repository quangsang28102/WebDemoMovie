import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../../../../models/IMovie/IMovie.model';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() datas: IMovie[] = [];
  ngOnInit() {

  };
}

