import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ia-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topics : String[] = [
    "Introduccion a Machine Learning",
    "Tratamiento previo de los datos y fundamentos de los algoritmos de ML",
    "Algoritmos Lineales",
    "Algoritmos No Lineales",
    "Algoritmos No Lineales",
    "Clustering y Modelos Jerárquicos",
    "Ensambles",
    "Evaluación",
    "Casos de estudio"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
