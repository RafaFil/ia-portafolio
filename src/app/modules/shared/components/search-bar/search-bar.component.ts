import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ia-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  value: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
