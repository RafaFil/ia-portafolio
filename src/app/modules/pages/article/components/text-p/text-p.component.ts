import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ia-text-p',
  templateUrl: './text-p.component.html',
  styleUrls: ['./text-p.component.css']
})
export class TextPComponent implements OnInit {

  @Input() textParagraph !: String;

  constructor() { }

  ngOnInit(): void {
  }

}
