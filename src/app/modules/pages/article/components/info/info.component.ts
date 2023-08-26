import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ia-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input() tags: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
