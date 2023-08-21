import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgPrimeModule } from 'src/app/ngprime.module';
import { MainPageComponent } from './main-page/main-page.component';
import { MainRoutingModule } from './main-routing.module';
import { StudyCaseCarrouselComponent } from './components/study-case-carrousel/study-case-carrousel.component';
import { ArticlePrewCardComponent } from './components/article-prew-card/article-prew-card.component';
import { CardCollectionComponent } from './components/card-collection/card-collection.component';
import { ArticlesFilterComponent } from './components/articles-filter/articles-filter.component';


@NgModule({
  declarations: [
    MainPageComponent,
    StudyCaseCarrouselComponent,
    ArticlePrewCardComponent,
    CardCollectionComponent,
    ArticlesFilterComponent
  ],
  imports: [
    CommonModule,
    NgPrimeModule,
    SharedModule,
    MainRoutingModule
  ]
})
export class MainModule { }