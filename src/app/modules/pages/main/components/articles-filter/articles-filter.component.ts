import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ia-articles-filter',
  templateUrl: './articles-filter.component.html',
  styleUrls: ['./articles-filter.component.css']
})
export class ArticlesFilterComponent implements OnInit {

  filters : string[] = [
    "Por Fecha",
    "Categoria 1",
    "Categoria 2"
  ]

  filter = ""

  constructor() { }

  ngOnInit(): void {
  }

}
