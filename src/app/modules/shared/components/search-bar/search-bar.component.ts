import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharingService } from 'src/app/modules/core/services/sharing.service';

@Component({
  selector: 'ia-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  value: string = "";

  @Output() changeOnInputSearch = new EventEmitter<string>();

  constructor(private sharing : SharingService) { }

  ngOnInit(): void {

     this.value =  this.sharing.sharedSearch;
  }

  onChangeInput() {
    
    this.changeOnInputSearch.emit(this.value);
  }


}
