import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from '../../models/IMovie/IMovie.model';
import { PagedList } from 'src/models/PagedList/pagedlist.model';

@Injectable({
  providedIn: 'root'
})
export class DataPopularMovieService {
  private apiUrl = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=2'; // Đặt URL API 
  constructor(private http: HttpClient) {}

  getData(): Observable<PagedList<IMovie>> {
    // Thêm header vào HTTP options
    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTU4MWQ0Zjk4NDg1ODg1YWJkZDZkOTZkOGE2ZDMyNiIsInN1YiI6IjY1MzI0NDgxOWFjNTM1MDg3YjQ1MTcxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4N_Thg3xJBQD5YKrBqbfP1NX3h7Xsw-UKoCeTcFsYuo', // Thêm header authorization nếu cần
      'accept': 'application/json' // Thêm các header tùy chỉnh khác nếu cần
    });

    const httpOptions = {
      headers: headers
    };
    // Gọi API
    return this.http.get<PagedList<IMovie>>(this.apiUrl, httpOptions);
  }
}
