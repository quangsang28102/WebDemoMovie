// search.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { IMovie } from 'src/models/IMovie/IMovie.model';
import { PagedList } from 'src/models/PagedList/pagedlist.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  suggestions: IMovie[] = [];
  id: string | null = null;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {
  }
  search() {    // Gợi ý tìm kiếm dựa trên giá trị trong biến searchTerm
    if (this.searchTerm.length > 2) {
      this.getSuggestions();
    } else {
      this.suggestions = []
    }
  }
  selectSuggestion(suggestion: string) {
    // Xử lý khi người dùng chọn một gợi ý từ danh sách
  }
  getSuggestions() {
    // Thực hiện cuộc gọi API để lấy danh sách gợi ý
    const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${this.searchTerm}&include_adult=false&language=en-US&page=1`; // Đặt URL API tại đâ

    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTU4MWQ0Zjk4NDg1ODg1YWJkZDZkOTZkOGE2ZDMyNiIsInN1YiI6IjY1MzI0NDgxOWFjNTM1MDg3YjQ1MTcxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4N_Thg3xJBQD5YKrBqbfP1NX3h7Xsw-UKoCeTcFsYuo', // Thêm header authorization nếu cần
      'accept': 'application/json' // Thêm các header tùy chỉnh khác nếu cần
    });
    const httpOptions = {
      headers: headers
    };
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.get<PagedList<IMovie>>(apiUrl, httpOptions).subscribe((response) => {
      this.suggestions = response.results;
      console.log(response.results)
    });
  }
}


