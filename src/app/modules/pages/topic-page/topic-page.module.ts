import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgPrimeModule } from 'src/app/ngprime.module';
import { TopicPageComponent } from './topic-page/topic-page.component';
import { TopicPageRoutingModule } from './topic-page-routing.module';
import { MainModule } from '../main/main.module';



@NgModule({
  declarations: [
    TopicPageComponent
  ],
  imports: [
    CommonModule,
    NgPrimeModule,
    SharedModule,
    ReactiveFormsModule,
    TopicPageRoutingModule,
    MainModule
  ]
})
export class TopicPageModule { }