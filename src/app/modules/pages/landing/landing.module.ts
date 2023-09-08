import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { TitleLandingComponent } from './components/title-landing/title-landing.component';
import { TopicsComponent } from './components/topics/topics.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingRoutingModule } from './landing-routing.module';
import { NgPrimeModule } from 'src/app/ngprime.module';
import { MainModule } from '../main/main.module';


@NgModule({
  declarations: [
    TitleLandingComponent,
    TopicsComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    NgPrimeModule,
    SharedModule,
    MainModule
  ]
})
export class LandingModule { }