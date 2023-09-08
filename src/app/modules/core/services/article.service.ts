import { Injectable } from '@angular/core';
import { ArticleDataService } from '../db/article-data.service';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles : Article[] = [];

  constructor(private articleDb : ArticleDataService) { }

  public getAllArticles() : Array<Article> {

    return this.articleDb.articlesData;
  }

  public getArticleById(id: number) : Article {
    const article = this.articleDb.articlesData.find(article => article.id === id);
    if (article) {
      return article
    }
    else {
      return {
        id: 0,
        title: "string",
        category: "string",
        topics: "string",
        parapgraph: [],
        tags: [],
        publishedDate: new Date()
      }
    }
  }

  public getAllArticlesByTopic(topic : string) {
    
    return this.articleDb.articlesData.filter(x => x.tags.includes(topic));
  }
}
