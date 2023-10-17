import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudyCasePreview } from 'src/app/modules/core/interfaces/studyCasePreview';

@Component({
  selector: 'ia-study-case-carrousel',
  templateUrl: './study-case-carrousel.component.html',
  styleUrls: ['./study-case-carrousel.component.css']
})
export class StudyCaseCarrouselComponent implements OnInit {

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
      image:"../../../../../../assets/img/Animals/Imagen5.png",
      cut:"animals"
    },
    {
      title:"Caso: Probabilidad de Titanic",
      shortDescripton: "Como caso de prueba se desea analizar la probabilidad de sobrevivir al titanic.",
      image: "../../../../../../assets/img/Titanic/titanic.png",
      cut: "titanic"
    }
  ]

  descriptionShown = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showDescription() {
    
    if (this.descriptionShown) {
      this.descriptionShown = false
    }
    else {

      this.descriptionShown = true
    }
  }

  redirectToCase(s: string){

    this.router.navigate([`/studycase/${s}`])
  }


}
