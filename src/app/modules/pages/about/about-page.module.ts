import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgPrimeModule } from 'src/app/ngprime.module';
import { AboutPageComponent } from './about-page/about-page.component';
import { AboutPageRoutingModule } from './about-page-routing.module';


@NgModule({
  declarations: [
  
    AboutPageComponent
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