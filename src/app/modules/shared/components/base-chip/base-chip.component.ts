import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'ia-base-chip',
  templateUrl: './base-chip.component.html',
  styleUrls: ['./base-chip.component.css']
})
export class BaseChipComponent implements OnInit {

  @Input() text!: String;


  constructor(private rout : Router) { }

  ngOnInit(): void {
  }

  goTopic() {

    this.rout.navigate(["theme/"+ this.text])
  }

}
