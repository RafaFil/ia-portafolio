import { Component, Input, OnInit } from '@angular/core';
import { Callout } from 'src/app/modules/core/interfaces/callout';

@Component({
  selector: 'ia-callout',
  templateUrl: './callout.component.html',
  styleUrls: ['./callout.component.css']
})
export class CalloutComponent implements OnInit {

  @Input() callout!: Callout;

  constructor() { }

  ngOnInit(): void {
  }

}
