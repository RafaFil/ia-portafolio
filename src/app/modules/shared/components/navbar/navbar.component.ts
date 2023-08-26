import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ia-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() sectionTitle : string = "Portafolio Inteligencia Artificial - Blog";
  showSearchBar = false;
  @Output() newInputSearchBar = new EventEmitter<string>();
  @Input() showSearchButton = true;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  

  toggleSearchBar(): void {
      this.showSearchBar = !this.showSearchBar;
  }

  onSearchBarInput(s: string) {

    this.newInputSearchBar.emit(s);
  }

  redirectHome() {
    this.router.navigate(["/main"]);
  }

}
