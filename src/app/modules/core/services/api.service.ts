import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getArticles() : Observable<Article[]> {
    return this.http.get<Article[]>(`http://20.201.12.138:3000/articles`);
  }

  getAllStudyCases() : Observable<Article[]> {
    return this.http.get<Article[]>(`http://20.201.12.138:3000/cases`);
  }

}
