import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { UT } from 'src/app/modules/core/db/ut-data.service';
import { TagsComponent } from 'src/app/modules/shared/components/tags/tags.component';

@Component({
  selector: 'ia-articles-filter',
  templateUrl: './articles-filter.component.html',
  styleUrls: ['./articles-filter.component.css']
})
export class ArticlesFilterComponent implements OnInit {

  checked : boolean = false;

  @Output() topicSelected = new EventEmitter<string>();

  filters : string[] = [
    "Por Fecha",
    "Categoria 1",
    "Categoria 2"
  ]

  filter = ""

  UTS: string[] = [
    "Introduccion a Machine Learning",
    "Tratamiento previo de los datos",
    "Algoritmos Lineales",
    "Algoritmos No Lineales",
    "Clustering y Modelos Jerárquicos",
    "Ensambles",
    "Evaluación",
    "Casos de estudio"
  ]

  TAG: string[] = [
    "Caso de estudio",
    "Trabajo de investigacion",
    "Prueba de Herramientas"
  ]

  filterForm = this.formBuilder.group({
    UT: new FormControl(this.UTS),
    TAG: [],
    ByDate: []
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  AddFilterUT(tag : TagsComponent) {

    this.topicSelected.emit(tag.text);

    if(tag.selected)
      tag.severity = "primary"
    else
      tag.severity = "success";
  }

}
