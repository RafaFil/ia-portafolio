import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/modules/core/interfaces/article';
import { StudyCasePreview } from 'src/app/modules/core/interfaces/studyCasePreview';
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
  casoEstudio = false;

  constructor(private route : ActivatedRoute, private articles : ArticleService, private topicsService: TopicsService, private nav: Router) { }

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

  studyCasesPreview : StudyCasePreview[] = [
    {
      title: "Caso: Probabilidad de un ataque cardiaco",
      shortDescripton: "En este caso se estudiara a partir de un dataset de historias clinicas la probabilidad de que un paciente padezca un ataque cardíaco",
      image: "../../../../../../assets/img/ut2_pd2_4.png",
      cut:"cardio"
    },
    {
      title: "Caso: Deteccion de una enfermedad renal",
      shortDescripton: "El diagnóstico de enfermedades renales crónicas es generalmente invasivo, costoso, lento y a menudo riesgoso. Es por eso que muchos pacientes llegan a etapas tardías sin tratamiento, especialmente en aquellos países donde los recursos son limitados.",
      image: "../../../../../../assets/img/CKD/bck.jpg",
      cut: "ckd"
    },
    {
      title: "Caso: Adopcion de Animales",
      shortDescripton: "Se desea analizar los datos de ingresos y salidas del Refugio de Animales de la ciudad de Austin, para comprender las tendencias de adopción de animales, incluyendo qué atributos de estos animales resultan en una probabilidad de adopción mayor.",
      image:"",
      cut:"animales"
    },
    {
      title:"Caso: Probabilidad de Titanic",
      shortDescripton: "Como caso de prueba se desea analizar la probabilidad de sobrevivir al titanic.",
      image: "",
      cut: "titanic"
    }
  ]

  //borrar

  goToce(cut : string) {
    this.nav.navigate([`/studycase/${cut}`])
  }
}
