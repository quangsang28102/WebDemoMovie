import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDetailMovie } from 'src/models/IDetailMovie/IDetailMovie.model';

@Injectable({
  providedIn: 'root'
})
export class DetailMovieService  {
  constructor(private http: HttpClient) {}
   // Đặt URL API 
   apiUrl = "";
  getData(id: string): Observable<IDetailMovie> {
    this.apiUrl = `https://api.themoviedb.org/3/movie/${id}/videos`;
    // Thêm header vào HTTP options
    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTU4MWQ0Zjk4NDg1ODg1YWJkZDZkOTZkOGE2ZDMyNiIsInN1YiI6IjY1MzI0NDgxOWFjNTM1MDg3YjQ1MTcxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4N_Thg3xJBQD5YKrBqbfP1NX3h7Xsw-UKoCeTcFsYuo', // Thêm header authorization nếu cần
      'accept': 'application/json' // Thêm các header tùy chỉnh khác nếu cần
    });

    const httpOptions = {
      headers: headers
    };
    // Gọi API
    return this.http.get<IDetailMovie>(this.apiUrl, httpOptions);
  }
  
}
