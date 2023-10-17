import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ia-study-case-page',
  templateUrl: './study-case-page.component.html',
  styleUrls: ['./study-case-page.component.css']
})
export class StudyCasePageComponent implements OnInit {

  remainingTime: number = 3;  

  cardio = false;

  ckd = false;

  titanic = false;

  animals = false;

  constructor(private router: Router, private actRouter : ActivatedRoute) { }

  ngOnInit(): void {
    // const timerInterval = setInterval(() => {
    //   this.remainingTime--;
    //   if (this.remainingTime <= 0) {
    //     clearInterval(timerInterval); 
    //     this.goBack();
    //   }
    // }, 1000);

    this.actRouter.paramMap.subscribe( param => {
      
      const id = param.get("id");

      if (id != null) {
        switch (id) {
          case "cardio":
            this.cardio = true;
            break;
          case "ckd":
            this.ckd = true;
            break
          case "titanic":
            this.titanic = true;
            break;
          case "animals":
            this.animals = true;
            break;
          default:
            this.router.navigate(['/'])
            break;
        }
      }
    })
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
