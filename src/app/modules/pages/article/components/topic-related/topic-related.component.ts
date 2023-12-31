import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ia-topic-related',
  templateUrl: './topic-related.component.html',
  styleUrls: ['./topic-related.component.css']
})
export class TopicRelatedComponent implements OnInit {

  @Input() headings!: string[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
