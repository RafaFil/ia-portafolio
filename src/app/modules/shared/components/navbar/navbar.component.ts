import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharingService } from 'src/app/modules/core/services/sharing.service';

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
  sharedText = "";

  constructor(private router : Router, private sharingService : SharingService) { }

  ngOnInit(): void {

  }

  

  toggleSearchBar(): void {
      this.showSearchBar = !this.showSearchBar;
  }

  onSearchBarInput(s: string) {
    
    this.sharingService.sharedSearch = s;
    this.newInputSearchBar.emit(s);
  }

  redirectHome() {
    this.router.navigate(["/main"]);
  }

}
