import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgPrimeModule } from 'src/app/ngprime.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NgPrimeModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
  ]
})
export class StudyCasesModule { }