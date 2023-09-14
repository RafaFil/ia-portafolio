import { Component, OnInit } from '@angular/core';
import { UT } from 'src/app/modules/core/enums/UT';

type TopicsType = {
  [key: string]: string;
};

@Component({
  selector: 'ia-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topicOrder: string[] = [
    "Introduccion a Machine Learning",
    "Tratamiento previo de los datos y fundamentos de los algoritmos de ML",
    "Algoritmos Lineales",
    "Algoritmos No Lineales",
    "Clustering y Modelos Jerárquicos",
    "Ensambles",
    "Evaluación",
    "Casos de estudio"
  ];


  topics : TopicsType = {
    "Introduccion a Machine Learning" : "Temática del aprendizaje automático, proveyendo un marco de trabajo aplicado y con enfoque industrial",
    "Tratamiento previo de los datos y fundamentos de los algoritmos de ML" : " Realzar la importancia del conocimiento de la naturaleza del problema abordado y los datos relativos al mismo, para entonces analizar las diversas herramientas disponibles para el tratamiento inicial de los datos. Revisar los fundamentos generales de los algoritmos de Aprendizaje Automático, eIntroducir las técnicas habitualmente utilizadas para la prueba y validación de modelos de ML",
    "Algoritmos Lineales" : "Analizar los algoritmos y modelos de ML, empezando por algoritmos sencillos lineales, profundizando también el estudio de la preparación previa de los datos y las técnicas de validación de los modelos. ",
    "Algoritmos No Lineales" : "",
    "Clustering y Modelos Jerárquicos" : "",
    "Ensambles" : "",
    "Evaluación" : "",
    "Casos de estudio" : ""
  }



  constructor() { }

  ngOnInit(): void {
    
  }


}
