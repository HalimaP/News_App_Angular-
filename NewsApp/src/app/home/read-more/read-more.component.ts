import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css'],
})
export class ReadMoreComponent implements OnInit {
  newsSub: Subscription;
  articleIndex: number;
  articleData: any;
  title: string = '';
  constructor(
    private newsService: NewsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.articleData = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    console.log('TEST');
    this.route.params.subscribe((params) => {
      this.articleIndex = params['id'];
      this.title = params['title'];
      console.log('title', this.title);
    });
    if (this.articleData == null && this.title !== '') {
      this.newsService.getArticleByTitle(this.title).subscribe((data) => {
        this.articleData = data;
      });
    }
    console.log('Article', this.articleData);
    console.log(this.newsService.getNewsByIndex(this.articleIndex));
  }
}
