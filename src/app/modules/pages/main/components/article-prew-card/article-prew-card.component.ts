import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Article } from 'src/app/modules/core/interfaces/article';

@Component({
  selector: 'ia-article-prew-card',
  templateUrl: './article-prew-card.component.html',
  styleUrls: ['./article-prew-card.component.css']
})
export class ArticlePrewCardComponent implements OnInit {

  @Input() article!: Article;

  

  constructor(private router : Router, private routerA : ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToArticle() {

    this.router.navigate([`main/article/${this.article.id}`]);
  }

  formatDate() {
    
    if(this.article.publishedDate) {

      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const date = new Date(this.article.publishedDate);
      const day = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();
    
      return `${day} ${month} ${year}`;
    }
    return "";
  }
}
