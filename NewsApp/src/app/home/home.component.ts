import { Component, OnDestroy, OnInit,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NewsService } from '../news.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('SEARCH') SEARCH: ElementRef;
  private routeSub: Subscription;
  title = 'news-app';
  articles;
  articleId;
  filterTerm: string;
  shopId: number;
  newsSub: Subscription;
  page;
  pageSize;
  lastSearchTerm;

  constructor(private newsService: NewsService,  private route: ActivatedRoute,private router:Router){}
  ngOnInit(){
  this.newsSub = this.newsService.news.subscribe(newsData=> {
    this.articles= newsData;
    console.log('articles::',this.articles)
    if (this.articles== null){
     this.getArticles();
    }
  });

  }

  ngOnDestroy(){
    if(this.newsSub){
      this.newsSub.unsubscribe();
    }
  }
  ngAfterViewInit(){
    fromEvent(this.SEARCH.nativeElement, 'keyup')
    .pipe(
      filter(Boolean),
      debounceTime(250), //in ms
      distinctUntilChanged(),
      tap((text)=> {
        console.log(this.SEARCH.nativeElement.value)
        this.page =1;
        this.lastSearchTerm = this.SEARCH.nativeElement;
        this.newsService.fetchMoreNews(this.pageSize, this.page, this.lastSearchTerm, true).subscribe();
      })
    )
    .subscribe();}
  onReadMoreClick(index){
this.router.navigate(['home', 'read-more', index, this.articles[index].title], {state:this.articles[index]})
  }

getArticles(){
  this.newsService.getNews().subscribe((data)=>{

});
}
loadMore(){
  this.page = this.page +1;
  this.newsService.fetchMoreNews(this.pageSize, this.page,this.lastSearchTerm).subscribe((data)=>{
    console.log('Added page +');
  });
}
onSearch(event){
  console.log('SEARCH TERm::: ', event.target.value);
  this.page=1;
}
}
