import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudyCase } from 'src/app/modules/core/interfaces/studyCase';
import { StudyCasePreview } from 'src/app/modules/core/interfaces/studyCasePreview';

@Component({
  selector: 'ia-study-case-carrousel',
  templateUrl: './study-case-carrousel.component.html',
  styleUrls: ['./study-case-carrousel.component.css']
})
export class StudyCaseCarrouselComponent implements OnInit {

  @Input() studyCasesPreview : StudyCase[] = []

  descriptionShown = false;

  constructor(private router: Router) { }

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

  redirectToCase(s: string) {

    this.router.navigate([`/studycase/${s}`])
  }


}
