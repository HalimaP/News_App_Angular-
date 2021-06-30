import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take, switchMap, tap, map, retry, catchError } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private $news = new BehaviorSubject<any>(null);
  API_KEY ='d785086fd3eb4dafa8a5bd867aba5e68';
  get news(){
    return this.$news.asObservable();
  }
  constructor(private httpClient: HttpClient) { }

  public getNews(){
    return this.httpClient.get(`
    https://newsapi.org/v2/everything?q=Apple&from=2021-06-29&sortBy=popularity&pageSize=50&apiKey=${this.API_KEY}`).pipe(
      take(1),
      map((newsData :any)=> {
     this.$news.next(newsData['articles']);
     console.log(newsData)
      })
    );
  }

  getNewsByIndex(index: number){

    this.$news.pipe(take(1),
    map(newsData =>{
      console.warn(index);
      console.warn(newsData)
      return newsData[index];

    }))

  }

}
