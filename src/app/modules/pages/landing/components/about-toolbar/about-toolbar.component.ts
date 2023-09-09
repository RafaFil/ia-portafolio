import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


type linksType = {
  [key: string]: string;
};

@Component({
  selector: 'ia-about-toolbar',
  templateUrl: './about-toolbar.component.html',
  styleUrls: ['./about-toolbar.component.css']
})
export class AboutToolbarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  redirectTo(value : string) {

    const links : linksType = {
      "Aboutme": "",
      "Github": "https://github.com/RafaFil",
      "LinkedIn": "https://uy.linkedin.com/in/rafael-filardi"
    }


    if (links[value] != null)
      window.open(links[value], '_blank');
  }

}
