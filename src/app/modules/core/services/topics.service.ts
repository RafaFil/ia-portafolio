import { Injectable } from '@angular/core';
import { UTopics } from '../db/ut-data.service';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  constructor(private utdata : UTopics) { }

  public getTopicsDescription(title: string) : any{
    
    return this.utdata.descriptionUT[title];
  }
}
