import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Article } from 'src/app/modules/core/interfaces/article';
import { ArticleService } from 'src/app/modules/core/services/article.service';
import { fadeInUpAnimation } from '../animations/animationFadeIn';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { StudyCase } from 'src/app/modules/core/interfaces/studyCase';
import { StudyCaseService } from 'src/app/modules/core/services/study-case.service';
import { CardCollectionComponent } from '../components/card-collection/card-collection.component';

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
  animations: [trigger('fadeInOut', [
    state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
    state('*', style({ opacity: 1, transform: 'translateY(0)' })),
    transition(':enter, :leave', animate('1s ease')),
  ])],
})
export class MainPageComponent implements OnInit {

  articles: Article[] = [];

  sc: StudyCase[] = [];

  articlesShown: Article[] = [];

  articlesRows: Article[] = [];

  isNavbarVisible: boolean = true;

  showNavBar = false;

  searchBarText = "";

  articleTags: string[] = [];

  @ViewChild('scrollToTop') scrollToTopElement: ElementRef | undefined;

  @HostListener('window:scroll', [])
  onScroll(): void {

    const scrollThreshold = 100;

    this.showNavBar = window.pageYOffset >= scrollThreshold;
  }


  constructor(private articleService: ArticleService, private el: ElementRef, private scService: StudyCaseService) { }

  ngOnInit(): void {

    this.articles = this.articleService.getAllArticles();
    this.articlesShown = this.articles;
    this.sc = this.scService.getAllArticles();
    this.turnToFirstPage()
  }

  searchBarTextRecieve(s: string) {
    this.searchBarText = s;
  }

  newTopicSelected(s: string) {
    if(!this.articleTags.includes(s)){
      this.articleTags.push(s);
    } else {
      this.articleTags.splice(this.articleTags.findIndex(x => x===s),1)
    }

    if(this.articleTags.length > 0){
      this.articlesShown = this.articles
        .filter(article => article.tags.some(tag => this.articleTags.includes(tag)));
    }
    else{
      this.articlesShown = this.articles
    }
    

    this.turnToFirstPage()
  }

  changeArticlesPage(page: number, first : number) {
    this.first = first
    this.getArticlesToShow(page)
  }

  getArticlesToShow(page: number) {
    const startIndex = page * this.rows;
    const endIndex = startIndex + this.rows;

    this.articlesRows = this.articlesShown.slice(startIndex, endIndex);
  }

  scrollToTop() {
    if (this.scrollToTopElement)
      this.scrollToTopElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  showArticulosDestacados(e: boolean) {
    if (e){
      // this.articlesShown = this.articles.filter(x => x.destacado);
      this.articlesShown = this.articles.filter(x => x.destacado);
    }
    else{
      // this.articlesShown = this.articles
      this.articlesShown = this.articles
    }
    this.turnToFirstPage()
  }

  first: number = 0;
  rows: number = 10;

  onPageChange(event: PageEvent) {
    this.changeArticlesPage(event.page, event.first)
    this.scrollToTop()
    console.log(this.first)
    console.log(event.page)
  }

  turnToFirstPage(){
    this.changeArticlesPage(0,0)
  }

}
