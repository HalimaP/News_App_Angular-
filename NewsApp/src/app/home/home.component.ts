import { Component, OnDestroy, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private routeSub: Subscription;
  title = 'news-app';
  articles;
  articleId;
  filterTerm: string;
  shopId: number;
  newsSub: Subscription;
  constructor(private newsService: NewsService,  private route: ActivatedRoute,private router:Router){}
  ngOnInit(){
  this.newsSub = this.newsService.news.subscribe(newsData=> {
    this.articles= newsData;
    console.log('articles::',this.articles)
    if (this.articles== null){
     this.getArticles();
    }
  })
  }
  ngOnDestroy(){
    if(this.newsSub){
      this.newsSub.unsubscribe();
    }
  }
  onReadMoreClick(index){
this.router.navigate(['home', 'read-more', index])
  }

getArticles(){
  this.newsService.getNews().subscribe((data)=>{

});
}

}
