import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeoplePopularService } from '../service/people-popular.service';
import { IKnownFor } from 'src/models/IPeoplePopular/IKnownFor.model';
import { IPeople } from 'src/models/IPeoplePopular/IPeople.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit{   
  dataPeople: IPeople<IKnownFor>[]= []  ;
  constructor(
    private dataPeoplePoupular: PeoplePopularService,
  ) { }

  ngOnInit() {      
    this.dataPeoplePoupular.getData().subscribe((res) => {  
      this.dataPeople = res.results.slice(0, 18)  
      console.log('res',this.dataPeople)  
      
      // this.dataKnownFor.getData().subscribe((res)=>{
      //   this.dataKnown = res.results
      // })
    });
    
    
  };
}
