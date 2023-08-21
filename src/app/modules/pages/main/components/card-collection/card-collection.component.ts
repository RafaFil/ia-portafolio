import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/modules/core/interfaces/article';

@Component({
  selector: 'ia-card-collection',
  templateUrl: './card-collection.component.html',
  styleUrls: ['./card-collection.component.css']
})
export class CardCollectionComponent implements OnInit {

  @Input() articles: Article[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
