import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/modules/core/interfaces/article';
import { ArticleService } from 'src/app/modules/core/services/article.service';
import { TopicsService } from 'src/app/modules/core/services/topics.service';

@Component({
  selector: 'ia-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.css']
})
export class TopicPageComponent implements OnInit {

  theme: string = "";
  articlesArr: Article[] = [];
  themeDescription: string = "";

  constructor(private route : ActivatedRoute, private articles : ArticleService, private topicsService: TopicsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( param => {

      const theme = param.get("theme");
      if (theme != null) {
        this.theme = theme.replace("%20", " ")
        this.articlesArr = this.articles.getAllArticlesByTopic(theme.replace("%20", " "));
        if (this.articlesArr.length == 0)
        {
          //working on it
        }
        else{
          this.themeDescription = this.topicsService.getTopicsDescription(this.theme);
        }
      }
      else {
      }
    })
  }

}
