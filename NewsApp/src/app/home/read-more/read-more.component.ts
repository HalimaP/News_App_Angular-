import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css']
})
export class ReadMoreComponent implements OnInit {
  articleIndex: number;
  articleData: any;
  constructor(private newsService: NewsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.route.params.subscribe((params) => {
      this.articleIndex= params['id'];
    });
    this.articleData= this.newsService.getNewsByIndex(this.articleIndex)

    console.log(this.articleData);
    console.log(this.newsService.getNewsByIndex(this.articleIndex))

  }

}
