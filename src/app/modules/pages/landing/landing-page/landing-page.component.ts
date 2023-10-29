import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleDataService } from 'src/app/modules/core/db/article-data.service';
import { ApiService } from 'src/app/modules/core/services/api.service';

@Component({
  selector: 'ia-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  @ViewChild('aboutToolbar') aboutToolbar: ElementRef | undefined;

  private isScrollingUp = false;
  private prevScrollY = 0;

  constructor(private router: Router, private elementRef: ElementRef,private api : ApiService, private ds : ArticleDataService) { }

    //TODO: SOLO PARA COMPILACION EN PRUEBAS, EN PROD ELIMINARLO
  
    ngOnInit(): void {
  
      this.getAllarticles();
    }
  
    getAllarticles() {
      console.log("a")
      this.api.getArticles().subscribe({
        next : (res) => {
          this.ds.articlesData = res.reverse();
          console.log(res)
        }
      })
    }

  public scrollToMain() {
    const mainPageElement = document.getElementById('mainPage');
    if (mainPageElement) {
      mainPageElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
