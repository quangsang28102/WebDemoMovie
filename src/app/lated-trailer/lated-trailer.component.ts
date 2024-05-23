import { Component, Input, OnInit } from '@angular/core';
import { BannerServiceService } from 'src/app/service/banner-service.service';
import { IMovie } from 'src/models/IMovie/IMovie.model';

@Component({
  selector: 'app-lated-trailer',
  templateUrl: './lated-trailer.component.html',
  styleUrls: ['./lated-trailer.component.css']
})
export class LatedTrailerComponent implements OnInit {
  dataTrailer: IMovie[] = [];

  constructor(private dataTrailerService: BannerServiceService) { }

  ngOnInit(): void {
    this.dataTrailerService.getData().subscribe((res) => {
      this.dataTrailer = res.results.slice(6, 12);
      console.log(this.dataTrailer)
    });
  }
}
