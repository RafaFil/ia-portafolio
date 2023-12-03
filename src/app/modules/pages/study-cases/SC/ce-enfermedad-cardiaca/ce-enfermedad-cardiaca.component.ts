import { Component, OnInit } from '@angular/core';
/**
 * @deprecated
 */
@Component({
  selector: 'ia-ce-enfermedad-cardiaca',
  templateUrl: './ce-enfermedad-cardiaca.component.html',
  styleUrls: ['./ce-enfermedad-cardiaca.component.css']
})
export class CEENFERMEDADCARDIACAComponent implements OnInit {

  roc = [
    {
      image : "../../../../../../assets/img/CE_cardaic/17.jpg",
      description: "Sin Norm"
    },
    {
      image : "../../../../../../assets/img/CE_cardaic/18.jpg",
      description: "Norm"
    },
  ]

  logreg = [
    {
      image : "../../../../../../assets/img/CE_cardaic/19.jpg",
      description: "CV"
    },
    {
      image : "../../../../../../assets/img/CE_cardaic/20.jpg",
      description: "FS"
    },
    {
      image : "../../../../../../assets/img/CE_cardaic/21.jpg",
      description: "BS"
    },
    {
      image : "../../../../../../assets/img/CE_cardaic/22.jpg",
      description: "EV"
    }
  ]

  knnB = [
    {
      image : "../../../../../../assets/img/CE_cardaic/23.jpg",
      description: "CV"
    },
    {
      image : "../../../../../../assets/img/CE_cardaic/24.jpg",
      description: "FS"
    },
    {
      image : "../../../../../../assets/img/CE_cardaic/25.jpg",
      description: "BS"
    },
    {
      image : "../../../../../../assets/img/CE_cardaic/26.jpg",
      description: "EV"
    }
  ]

  knn = [
    {
      image : "../../../../../../assets/img/CE_cardaic/27.jpg",
      description: "CV"
    },
    {
      image : "../../../../../../assets/img/CE_cardaic/28.jpg",
      description: "FS"
    },
    {
      image : "../../../../../../assets/img/CE_cardaic/29.jpg",
      description: "BS"
    },
    {
      image : "../../../../../../assets/img/CE_cardaic/30.jpg",
      description: "EV"
    }
  ]

  nbB = [
    {
      image : "../../../../../../assets/img/CE_cardaic/31.jpg",
      description: "CV"
    },
    {
      image : "../../../../../../assets/img/CE_cardaic/32.jpg",
      description: "FS"
    },
    {
      image : "../../../../../../assets/img/CE_cardaic/33.jpg",
      description: "BS"
    },
    {
      image : "../../../../../../assets/img/CE_cardaic/34.jpg",
      description: "EV"
    }
  ]

  nb = [
    {
      image : "../../../../../../assets/img/CE_cardaic/35.jpg",
      description: "CV"
    },
    {
      image : "../../../../../../assets/img/CE_cardaic/36.jpg",
      description: "FS"
    },
    {
      image : "../../../../../../assets/img/CE_cardaic/37.jpg",
      description: "BS"
    },
    {
      image : "../../../../../../assets/img/CE_cardaic/38.jpg",
      description: "EV"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
