import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ia-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input() text!: string;
  @Input() severity: string = "success";
  @Input() severityCustom!: string;
  selected = false;

  constructor() { }

  ngOnInit(): void {
  }

}
