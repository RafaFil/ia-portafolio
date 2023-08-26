import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ia-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  @HostListener('window:scroll', ['$event']) 
  onScroll() {
    this.scrollToMain();
  }

  constructor(private router: Router, private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  public scrollToMain() {

    this.router.navigate(['/main']);
  }

}
