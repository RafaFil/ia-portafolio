import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgPrimeModule } from 'src/app/ngprime.module';
import { AboutPageComponent } from './about-page/about-page.component';
import { AboutPageRoutingModule } from './about-page-routing.module';
import { LinkedinPagesComponent } from './linkedin-pages/linkedin-pages.component';
import { LinkedinCardComponent } from './linkedin-card/linkedin-card.component';


@NgModule({
  declarations: [
  
    AboutPageComponent,
        LinkedinPagesComponent,
        LinkedinCardComponent
  ],
  imports: [
    CommonModule,
    NgPrimeModule,
    SharedModule,
    ReactiveFormsModule,
    AboutPageRoutingModule
  ],
  exports: [
  ]
})
export class AboutPageModule { }