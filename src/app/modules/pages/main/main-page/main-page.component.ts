import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Article } from 'src/app/modules/core/interfaces/article';
import { ArticleService } from 'src/app/modules/core/services/article.service';
import { fadeInUpAnimation } from '../animations/animationFadeIn';

@Component({
  selector: 'ia-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  //animations: [ fadeInUpAnimation ],
})
export class MainPageComponent implements OnInit {

  articles: Article[] = [];

  isNavbarVisible: boolean = true; 
  
  showNavBar = false;

  searchBarText = "";

  articleTags : string[] = [];

  @HostListener('window:scroll', [])
  onScroll(): void {

    const scrollThreshold = 100; 

    this.showNavBar = window.pageYOffset >= scrollThreshold;
  }


  constructor(private articleService : ArticleService, private el: ElementRef) { }

  ngOnInit(): void {
    console.log("aaaa")
    this.articles = this.articleService.getAllArticles();
  }

  searchBarTextRecieve(s : string) {
    this.searchBarText = s;
  }

  newTopicSelected(s : string) {
    
    this.articleTags.push(s);
    this.articles = this.articles
    .filter(article => article.tags.some(tag => this.articleTags.includes(tag)));
  }
}
