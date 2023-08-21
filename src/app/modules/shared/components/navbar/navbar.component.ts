import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ia-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() sectionTitle : string = "Portafolio Inteligencia Artificial - Blog";

  constructor() { }

  ngOnInit(): void {
  }

}
