import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ia-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() sectionTitle : string = "Portafolio Inteligencia Artificial - Blog";
  showSearchBar = false;
  @Output() newInputSearchBar = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  

  toggleSearchBar(): void {
      this.showSearchBar = !this.showSearchBar;
  }

  onSearchBarInput(s: string) {

    this.newInputSearchBar.emit(s);
  }

}
