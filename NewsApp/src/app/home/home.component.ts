import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'news-app';
  articles;
  id;
  filterTerm: string;
  constructor(private newsService: NewsService,  private route: ActivatedRoute,private router:Router){}
  ngOnInit(){
    this.route.params.subscribe((params:Params) => {
      this.id = +params['id']
    });
    this.newsService.getNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
      
      this.getArticle(this.id)
    });
   
  }
  getArticle(id:number){
    for(let i = 0; i<= this.articles.length; i++){
      this.id = i

    }
    id= this.id
    console.log(id)
    return id 
   
  }
  activateJob(id){
    this.router.navigate(['read-more', id])

  }
  
}
