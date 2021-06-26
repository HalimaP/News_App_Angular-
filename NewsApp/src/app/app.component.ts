import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'news-app';
  articles;
  searchedKeyword: string;
  constructor(private newsService: NewsService){}
  ngOnInit(){
    this.newsService.getNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }
}
