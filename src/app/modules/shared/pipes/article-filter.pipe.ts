import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../../core/interfaces/article';


@Pipe({
  name: 'articleFilter'
})
export class ArticleFilterPipe implements PipeTransform {
  transform(articles: Article[], filterText: string): Article[] {
    if (!filterText) {
      return articles; // Return all articles if no filter text provided
    }

    filterText = filterText.toLowerCase();
    return articles.filter(article => article.title.toLowerCase().includes(filterText));
  }
}
