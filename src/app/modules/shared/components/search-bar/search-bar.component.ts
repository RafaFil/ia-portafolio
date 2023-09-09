import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ia-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  value: string = "";

  @Output() changeOnInputSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    console.log("a")
  }

  onChangeInput() {
    
    this.changeOnInputSearch.emit(this.value);
  }

  keepValueBetweenImplementations(s : string) {
    this.value = s;
  }


}
