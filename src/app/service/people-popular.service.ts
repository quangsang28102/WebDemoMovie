import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeoplePopular } from 'src/models/IPeoplePopular/pepple.model';
import { IPeople } from 'src/models/IPeoplePopular/IPeople.model';
import { IKnownFor } from 'src/models/IPeoplePopular/IKnownFor.model';

@Injectable({
  providedIn: 'root'
})
export class PeoplePopularService {
  private apiUrl = 'https://api.themoviedb.org/3/person/popular'; // Đặt URL API 
  constructor(private HttpClient: HttpClient) {}

  getData(): Observable<PeoplePopular<IPeople<IKnownFor>>> {
    // Thêm header vào HTTP options
    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTU4MWQ0Zjk4NDg1ODg1YWJkZDZkOTZkOGE2ZDMyNiIsInN1YiI6IjY1MzI0NDgxOWFjNTM1MDg3YjQ1MTcxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4N_Thg3xJBQD5YKrBqbfP1NX3h7Xsw-UKoCeTcFsYuo', // Thêm header authorization nếu cần
      'accept': 'application/json' // Thêm các header tùy chỉnh khác nếu cần
    });

    const httpOptions = {
      headers: headers
    };
    // Gọi API
    return this.HttpClient.get<PeoplePopular<IPeople<IKnownFor>>>(this.apiUrl, httpOptions);
  }
} 
