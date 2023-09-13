import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ia-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  @ViewChild('aboutToolbar') aboutToolbar: ElementRef | undefined;

  private isScrollingUp = false;
  private prevScrollY = 0;

  constructor(private router: Router, private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  public scrollToMain() {
    const mainPageElement = document.getElementById('mainPage');
    if (mainPageElement) {
      mainPageElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
