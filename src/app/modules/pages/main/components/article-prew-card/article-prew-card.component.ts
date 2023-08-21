import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/modules/core/interfaces/article';

@Component({
  selector: 'ia-article-prew-card',
  templateUrl: './article-prew-card.component.html',
  styleUrls: ['./article-prew-card.component.css']
})
export class ArticlePrewCardComponent implements OnInit {

  @Input() article!: Article;

  constructor() { }

  ngOnInit(): void {
  }

}
