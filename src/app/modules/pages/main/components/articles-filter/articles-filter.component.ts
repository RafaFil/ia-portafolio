import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Tags } from 'src/app/modules/core/enums/tags';
import { TagsComponent } from 'src/app/modules/shared/components/tags/tags.component';

@Component({
  selector: 'ia-articles-filter',
  templateUrl: './articles-filter.component.html',
  styleUrls: ['./articles-filter.component.css']
})
export class ArticlesFilterComponent implements OnInit {

  checked : boolean = false;
  destacadoSelected = false;

  @Output() topicSelected = new EventEmitter<string>();
  @Output() showDestacado = new EventEmitter<boolean>();

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

  TAG = Tags;

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

  showDestacados() {

    if (this.destacadoSelected) {
      this.destacadoSelected = false;
      this.showDestacado.emit(false)
    }
    else
    {
      this.destacadoSelected = true;
      this.showDestacado.emit(true)
    }    

  }

}
