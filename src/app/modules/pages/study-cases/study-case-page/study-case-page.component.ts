import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ia-study-case-page',
  templateUrl: './study-case-page.component.html',
  styleUrls: ['./study-case-page.component.css']
})
export class StudyCasePageComponent implements OnInit {

  remainingTime: number = 3;  

  constructor(private router: Router) { }

  ngOnInit(): void {
    const timerInterval = setInterval(() => {
      this.remainingTime--;
      if (this.remainingTime <= 0) {
        clearInterval(timerInterval); 
        this.goBack();
      }
    }, 1000);
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
