import { Component, Input, OnInit } from '@angular/core';
import { BannerServiceService } from 'src/app/service/banner-service.service';
import { IMovie } from 'src/models/IMovie/IMovie.model';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  dataBanner: IMovie[] = [];
  selectedTitle: string = '';
  selectedIndex = 0;
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000;
  constructor(private dataBannerService: BannerServiceService) { }
  ngOnInit(): void {
    this.dataBannerService.getData().subscribe((res) => {
      this.dataBanner = res.results.slice(0,5);
      
      if (this.autoSlide) {
        this.autoSlideImages();
      }
    });
  }
  autoSlideImages(): void {
   // this.selectedTitle = this.dataBanner[0].title;
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }
  selectImage(index: number): void {
    this.selectedIndex = index;
  }
  selectTitle(index: number): void {
    this.selectedIndex = index;
    console.log("index ",index)
  }
  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.dataBanner.length - 1;
    } else {
      this.selectedIndex--;
    }
  }
  onNextClick(): void {
    if (this.selectedIndex === this.dataBanner.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

}