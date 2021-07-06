import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take, switchMap, tap, map, retry, catchError } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private $news = new BehaviorSubject<any>(null);
  public showSpinner: BehaviorSubject<boolean> = new BehaviorSubject(false);
  API_KEY ='5b13873dbf214e11a5866644aaed8166';
  get news(){
    return this.$news.asObservable();
  }
  constructor(private httpClient: HttpClient) { }

  public getNews(){
    this.showSpinner.next(true);
    return this.httpClient.get(`
    https://newsapi.org/v2/everything?q=Apple&from=2021-06-29&sortBy=popularity&apiKey=${this.API_KEY}`).pipe(

      take(1),
      map((newsData :any)=> {
     this.$news.next(newsData['articles']);
     console.log(newsData)
      })
    );
  }

  getNewsByIndex(index: number){

   let data =this.$news.value;
   return data[index];

  }
  fetchMoreNews(pageSize: number = 20, page: number = 1, searchTitle:string ="tesla", clearOldData: boolean = false){
return this.httpClient.get(` https://newsapi.org/v2/everything?qInTitle=${searchTitle}&pageSize=${pageSize}&page=${page}&from=2021-06-29&sortBy=popularity&apiKey=${this.API_KEY}`).pipe(
take(1),
map((newsData:any)=>{
  if(clearOldData){
    this.$news.next(newsData['articles']);
  }
  let oldNews:any = this.$news.value;
  this.$news.next(oldNews.concat(newsData['articles']));
  console.log(newsData)
})
);
}
// Fetching single article to show in readMore Component
public getArticleByTitle(title:string){
  return this.httpClient.get(` https://newsapi.org/v2/everything?q=Apple&title=${title}&from=2021-06-29&sortBy=popularity&apiKey=${this.API_KEY}`).pipe(
    take(1),
    map(response=>{
      if(response && response['articles']){
        let articles = response['articles'];
        return articles[0];

      }
    })
  )
}

}
