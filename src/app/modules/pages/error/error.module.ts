import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgPrimeModule } from 'src/app/ngprime.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SmthWentWrongComponent } from './smth-went-wrong/smth-went-wrong.component';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    SmthWentWrongComponent
  ],
  imports: [
    CommonModule,
    NgPrimeModule,
    SharedModule,
  ]
})
export class ErrorModule { }