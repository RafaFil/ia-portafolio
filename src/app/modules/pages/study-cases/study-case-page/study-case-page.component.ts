import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { StudyCase } from 'src/app/modules/core/interfaces/studyCase';
import { StudyCaseService } from 'src/app/modules/core/services/study-case.service';

@Component({
  selector: 'ia-study-case-page',
  templateUrl: './study-case-page.component.html',
  styleUrls: ['./study-case-page.component.css']
})
export class StudyCasePageComponent implements OnInit {

  studyCase!: StudyCase;

  htmlRender!: SafeHtml;

  title = "";

  remainingTime: number = 3;  

  cardio = false;

  ckd = false;

  titanic = false;

  animals = false;

  constructor(private router: Router, private actRouter : ActivatedRoute, private sc : StudyCaseService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.actRouter.paramMap.subscribe( param => {
      
      const cat = param.get("cat");

      if (cat != null && typeof cat != undefined) {
        
        const res = this.sc.getArticleByCat(cat);

        if (res) {

          this.studyCase = res;
          this.htmlRender =     this.htmlRender = this.sanitizer.bypassSecurityTrustHtml(res.html);
          this.title = res.title;
        }
      }
      else {

        this.router.navigate(['/**'])
      }
    })
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
