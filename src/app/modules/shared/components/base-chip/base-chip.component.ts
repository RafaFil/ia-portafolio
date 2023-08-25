import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ia-base-chip',
  templateUrl: './base-chip.component.html',
  styleUrls: ['./base-chip.component.css']
})
export class BaseChipComponent implements OnInit {

  @Input() text!: String;


  constructor() { }

  ngOnInit(): void {
  }

  goTopic() {
    console.log(this.text)
  }

}
