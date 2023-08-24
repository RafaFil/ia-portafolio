import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgPrimeModule } from 'src/app/ngprime.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SmthWentWrongComponent } from './smth-went-wrong/smth-went-wrong.component';
import { ErrorRoutingModule } from './error-routing.module';
import { SiteUnderConstructionComponent } from './site-under-construction/site-under-construction.component';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    SmthWentWrongComponent,
    SiteUnderConstructionComponent
  ],
  imports: [
    CommonModule,
    NgPrimeModule,
    SharedModule,
    ErrorRoutingModule
  ]
})
export class ErrorModule { }