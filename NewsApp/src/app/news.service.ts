import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take, switchMap, tap, map, retry, catchError } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  API_KEY ='d785086fd3eb4dafa8a5bd867aba5e68';
  constructor(private httpClient: HttpClient) { }

  public getNews(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }
 
}