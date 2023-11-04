import { Injectable } from '@angular/core';
import { StudyCase } from '../interfaces/studyCase';
import { StudyCaseDataService } from '../db/study-case-data.service';

@Injectable({
  providedIn: 'root'
})
export class StudyCaseService {

  constructor(private scds : StudyCaseDataService) { }

  public getAllArticles() : Array<StudyCase> {

    return this.scds.studyCase;
  }

  public getArticleByCat(cat: string) {

    return this.scds.studyCase.find(sc => sc.cut === cat);
  }
}
