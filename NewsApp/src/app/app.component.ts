import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'news-app';
  constructor(private newsService: NewsService,  private route: ActivatedRoute,private router:Router){}
  ngOnInit(){ }
}
