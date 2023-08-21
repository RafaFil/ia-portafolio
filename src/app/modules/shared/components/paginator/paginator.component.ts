import { Component, OnInit } from '@angular/core';
import { PageEvent } from 'src/app/modules/core/interfaces/pageEvent';

@Component({
  selector: 'ia-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  first: number = 0;

  rows: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

  onPageChange(event: PageEvent) {
      this.first = event.first;
      this.rows = event.rows;
  }

}
