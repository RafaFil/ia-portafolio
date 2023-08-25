import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChipComponent } from './components/base-chip/base-chip.component';
import { NgPrimeModule } from 'src/app/ngprime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { TagsComponent } from './components/tags/tags.component';
import { ArticleFilterPipe } from './pipes/article-filter.pipe';

@NgModule({
  declarations: [
    BaseChipComponent,
    NavbarComponent,
    SearchBarComponent,
    PaginatorComponent,
    TagsComponent,
    ArticleFilterPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgPrimeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    BaseChipComponent,
    NavbarComponent,
    SearchBarComponent,
    PaginatorComponent,
    TagsComponent,
    ArticleFilterPipe,
  ]
})
export class SharedModule { }