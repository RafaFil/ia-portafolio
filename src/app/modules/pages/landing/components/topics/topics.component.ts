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
    "UT3"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
