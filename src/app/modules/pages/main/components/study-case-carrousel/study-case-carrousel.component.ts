import { Component, OnInit } from '@angular/core';
import { StudyCasePreview } from 'src/app/modules/core/interfaces/studyCasePreview';

@Component({
  selector: 'ia-study-case-carrousel',
  templateUrl: './study-case-carrousel.component.html',
  styleUrls: ['./study-case-carrousel.component.css']
})
export class StudyCaseCarrouselComponent implements OnInit {

  studyCasesPreview : StudyCasePreview[] = [
    {
      title: "caso 1",
      shortDescripton: "description"
    },
    {
      title: "caso 2",
      shortDescripton: "description"
    },
    {
      title: "caso 3",
      shortDescripton: "description"
    },
    {
      title: "caso 4",
      shortDescripton: "description"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
