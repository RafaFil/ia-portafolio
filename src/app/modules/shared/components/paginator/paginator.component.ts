import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PageEvent } from 'src/app/modules/core/interfaces/pageEvent';
import { ArticleService } from 'src/app/modules/core/services/article.service';

@Component({
  selector: 'ia-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Output() onChangeOfPage :  EventEmitter<number> = new EventEmitter<number>() ;

  first: number = 0;

  rows: number = 10;

  total : number = 10;

  constructor(private articlesService : ArticleService) { }

  ngOnInit(): void {
    this.total = this.articlesService.getTotalNumberOfArticles();
  }

  onPageChange(event: PageEvent) {
      this.first = event.first;
      this.rows = event.rows;

      this.onChangeOfPage.emit(event.page);
  }

}
