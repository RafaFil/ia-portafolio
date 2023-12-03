import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/modules/core/interfaces/article';
import { StudyCase } from 'src/app/modules/core/interfaces/studyCase';
import { StudyCasePreview } from 'src/app/modules/core/interfaces/studyCasePreview';
import { ArticleService } from 'src/app/modules/core/services/article.service';
import { StudyCaseService } from 'src/app/modules/core/services/study-case.service';
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
  casoEstudio = false;

  constructor(private route : ActivatedRoute, private articles : ArticleService, private topicsService: TopicsService, private nav: Router, private scService: StudyCaseService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( param => {

      const theme = param.get("theme");
      if (theme != null) {
        this.theme = theme.replace("%20", " ")
        this.articlesArr = this.articles.getAllArticlesByTopic(theme.replace("%20", " "));
        if (this.articlesArr.length == 0)
        {
          //ARREGLAR DESPUES
          if (this.theme == "Casos de estudio") {
            this.themeDescription = "Son estudios transversales a los diferentes temas. Se basan en el modelo CRISP-DM y abarcan una amplia gama de algortimos y tecnicas de preparacion de datos"
            this.studyCasesPreview = this.scService.getAllArticles();
            this.casoEstudio = true
          }
        }
        else{
          this.themeDescription = this.topicsService.getTopicsDescription(this.theme);
        }
      }
      else {
      }
    })
  }

  studyCasesPreview : StudyCase[] = [

  ]

  //borrar

  goToce(cut : string) {
    this.nav.navigate([`/studycase/${cut}`])
  }
}
