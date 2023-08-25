import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/modules/core/interfaces/article';
import { ArticleService } from 'src/app/modules/core/services/article.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  article: Article | undefined ;
  articleId = 1;

  constructor(private articleService : ArticleService, private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(param => {
      const id = param.get("id");
      if (id != null) {
        console.log(id);
        this.articleId = parseInt(id);
        this.article = this.articleService.getArticleById(this.articleId);

        if (this.article.id === 0) {
          // redirect to page not found
        }
      }
      else {
        // redirect to something went wrong
      }
    })
    
  }

}