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
      title: "Caso: Probabilidad de un segundo ataque cardiaco",
      shortDescripton: "En este caso se estudiara a partir de un dataset de historias clinicas la probabilidad de que un paciente padezca un segundo ataque cardíaco",
      image: "../../../../../../assets/img/ut2_pd2_4.jpg"
    },
    {
      title: "Caso: Deteccion de casos de fraude de tarjetas de crédito",
      shortDescripton: "description",
      image: "../../../../../../assets/img/cow.jpg"
    },
    {
      title: "Caso: TBD",
      shortDescripton: "CASOS TBD",
      image: "../../../../../../assets/img/cow.jpg"
    },
    {
      title: "Caso: TBD",
      shortDescripton: "CASOS TBD",
      image: "../../../../../../assets/img/cow.jpg"
    },
  ]

  descriptionShown = false;

  constructor() { }

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


}
