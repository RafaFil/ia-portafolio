import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgPrimeModule } from 'src/app/ngprime.module';
import { ArticlePageComponent } from './article-page/article-page.component';
import { ArticleRoutingModule } from './article-routing.module';
import { TitleHeaderComponent } from './components/title-header/title-header.component';
import { TextPComponent } from './components/text-p/text-p.component';
import { ImageComponent } from './components/image/image.component';
import { InfoComponent } from './components/info/info.component';
import { TopicRelatedComponent } from './components/topic-related/topic-related.component';
import { CalloutComponent } from './components/callout/callout.component';
import { ArticleImageComponent } from './components/article-image/article-image.component';


@NgModule({
  declarations: [
    ArticlePageComponent,
    TitleHeaderComponent,
    TextPComponent,
    ImageComponent,
    InfoComponent,
    TopicRelatedComponent,
    CalloutComponent,
    ArticleImageComponent
  ],
  imports: [
    CommonModule,
    NgPrimeModule,
    SharedModule,
    ArticleRoutingModule,
  ]
})
export class ArticleModule { }