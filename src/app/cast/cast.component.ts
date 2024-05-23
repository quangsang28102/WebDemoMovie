import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CreditService } from '../service/credit.service';
import { ReviewService } from '../service/review.service';
import { TopRatedService } from '../service/top-rated-data.service';
import { IMovie } from 'src/models/IMovie/IMovie.model';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit{  
  id: string | null = null;
  dataTopRated: IMovie[] = [];
  cast: any;
  results: any;
  author: string='';
  created_at: string='';
  content: string='';
  constructor(
    private route: ActivatedRoute,   
    private dataCastService: CreditService,
    private dataReviewService: ReviewService,
    private dataTopRatedService: TopRatedService,
  ) { }  
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');  
    this.dataCastService.getData(this.id!).subscribe((res) => {
      this.cast = res.cast
    });  
    this.id = this.route.snapshot.paramMap.get('id');  
    this.dataReviewService.getData(this.id!).subscribe((res) => {
      this.results = res.results
      this.author = res.results[0].author
      this.author = res.results[0].author
      this.created_at = res.results[0].created_at
      this.content = res.results[0].content
      console.log('results:'+this.results[0].author_details)
    });
    this.dataTopRatedService.getData().subscribe((res) => {
      this.dataTopRated = res.results;
      console.log('res',res)
    }); 
  }  
}
