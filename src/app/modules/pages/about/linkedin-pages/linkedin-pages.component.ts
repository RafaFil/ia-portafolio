import { Component, OnInit } from '@angular/core';
import { LinkedinUrls } from 'src/app/modules/core/interfaces/linkedinUrls';

@Component({
  selector: 'ia-linkedin-pages',
  templateUrl: './linkedin-pages.component.html',
  styleUrls: ['./linkedin-pages.component.css']
})
export class LinkedinPagesComponent implements OnInit {

  linkedins : LinkedinUrls[] = [
    {
      name: "Santiago Alonso",
      // linkedinPfp: "https://media.licdn.com/dms/image/D4E35AQGEhGQsDzCFgA/profile-framedphoto-shrink_800_800/0/1695324450707?e=1700604000&v=beta&t=yMQdCGEz6rbeWWSooU0Ndwki43-1q0W_RuT4tu3JTew",
      // linkedinBackgroudn: "https://media.licdn.com/dms/image/D4D16AQEA1HIIxO-j5g/profile-displaybackgroundimage-shrink_350_1400/0/1685401764507?e=1705536000&v=beta&t=tW9UFonEsaSfBIa1aydTLqLAXKL6fDqrcZo9RVvV4Bk",
      linkedin:"",
      github:"",
      linkedinPfp: "",
      linkedinBackgroudn: ""
    },
    {
      name: "Rafael Filardi",
      linkedinPfp: "",
      linkedinBackgroudn: "",
      linkedin:"",
      github:""
    },
    {
      name: "Joaquin Gasco",
      linkedinPfp: "",
      linkedinBackgroudn: "",
      linkedin:"",
      github:""
    },    {
      name: "Antonella Gutierrez",
      linkedinPfp: "",
      linkedinBackgroudn: "",
      linkedin:"",
      github:""
    },
    {
      name: "Juan Manuel Perez",
      linkedinPfp: "",
      linkedinBackgroudn: "",
      linkedin:"",
      github:""
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public redirectHome() {

  }
}
