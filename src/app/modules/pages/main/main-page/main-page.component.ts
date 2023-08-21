import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/modules/core/interfaces/article';
import { ArticleService } from 'src/app/modules/core/services/article.service';

@Component({
  selector: 'ia-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleService : ArticleService) { }

  ngOnInit(): void {
    this.articles = this.articleService.getAllArticles();
  }

}
