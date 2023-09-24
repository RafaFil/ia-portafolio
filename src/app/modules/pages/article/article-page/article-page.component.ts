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
  nextArt = "";
  prevArt = "";

  constructor(private articleService : ArticleService, private router : ActivatedRoute, private routerNav : Router) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(param => {
      const id = param.get("id");
      if (id != null) {
        console.log(id);
        this.articleId = parseInt(id);
        this.article = this.articleService.getArticleById(this.articleId);
        this.nextArt = this.articleService.getArticleById(this.articleId + 1).title;
        this.prevArt = this.articleService.getArticleById(this.articleId - 1).title;

        if (this.article.id === 0) {
          // redirect to page not found
        }
      }
      else {
        // redirect to something went wrong
      }
    })
    
  }

  formatDate() {
    
    if(this.article?.publishedDate) {

      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const date = new Date(this.article.publishedDate);
      const day = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();
    
      return `${day} ${month} ${year}`;
    }
    return "";
  }

  nextArticleRedirect() {

    if (this.article) {

      const nextId = this.article.id + 1;
      const nextUrl = `/main/article/${nextId}`;
      this.routerNav.navigateByUrl(nextUrl);
    }
    
  }

  prevArticleRedirect() {

    if (this.article) {

      const nextId = this.article.id - 1;
      const nextUrl = `/main/article/${nextId}`;
      this.routerNav.navigateByUrl(nextUrl);
      

    }
  }

}
