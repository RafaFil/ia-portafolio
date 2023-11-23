import { Component, Input, OnInit } from '@angular/core';
import { LinkedinUrls } from 'src/app/modules/core/interfaces/linkedinUrls';

@Component({
  selector: 'ia-linkedin-card',
  templateUrl: './linkedin-card.component.html',
  styleUrls: ['./linkedin-card.component.css']
})
export class LinkedinCardComponent implements OnInit {

  @Input() userInfo!: LinkedinUrls; 

  constructor() { }

  ngOnInit(): void {
  }
  
  redirectTogh() {

    window.location.replace(this.userInfo.github);
  }

  redirectToLn() {

    window.location.replace(this.userInfo.linkedin);
  }

}
