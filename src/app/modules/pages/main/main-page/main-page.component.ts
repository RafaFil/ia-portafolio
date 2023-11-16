import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Article } from 'src/app/modules/core/interfaces/article';
import { ArticleService } from 'src/app/modules/core/services/article.service';
import { fadeInUpAnimation } from '../animations/animationFadeIn';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { StudyCase } from 'src/app/modules/core/interfaces/studyCase';
import { StudyCaseService } from 'src/app/modules/core/services/study-case.service';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'ia-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  animations: [  trigger('fadeInOut', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('*', style({ opacity: 1, transform: 'translateY(0)' })),
      transition(':enter, :leave', animate('1s ease')),
    ])],
})
export class MainPageComponent implements OnInit {

  articles: Article[] = [];

  sc: StudyCase[] = [];

  articlesShown : Article[] = [];

  isNavbarVisible: boolean = true; 
  
  showNavBar = false;

  searchBarText = "";

  articleTags : string[] = [];

  @ViewChild('scrollToTop') scrollToTopElement: ElementRef | undefined;

  @HostListener('window:scroll', [])
  onScroll(): void {

    const scrollThreshold = 100; 

    this.showNavBar = window.pageYOffset >= scrollThreshold;
  }


  constructor(private articleService : ArticleService, private el: ElementRef, private scService : StudyCaseService) { }

  ngOnInit(): void {

    this.articles = this.articleService.getAllArticles();
    this.sc = this.scService.getAllArticles();
  }

  searchBarTextRecieve(s : string) {
    this.searchBarText = s;
  }

  newTopicSelected(s : string) {
    
    this.articleTags.push(s);
    // this.articlesShown = this.articles
    // .filter(article => article.tags.some(tag => this.articleTags.includes(tag)));
      this.articles = this.articles
    .filter(article => article.tags.some(tag => this.articleTags.includes(tag)));
  }

  changeArticlesPage(page : number) {
    this.getArticlesToShow(page)
  }

  getArticlesToShow(page : number) {
     
    const itemsPerPage = 10; 
    const startIndex = page * itemsPerPage; 
    const endIndex = startIndex + itemsPerPage; 

    this.articlesShown = this.articles.slice(startIndex, endIndex);
    this.scrollToTop()

  }

  scrollToTop() {
    if (this.scrollToTopElement)
      this.scrollToTopElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  showArticulosDestacados(e : boolean) {

    if (e)
      // this.articlesShown = this.articles.filter(x => x.destacado);
      this.articles = this.articles.filter(x => x.destacado);
    else
      // this.articlesShown = this.articles
      this.articles = this.articles
  }


  first: number = 0;

  rows: number = 10;

  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }

}
