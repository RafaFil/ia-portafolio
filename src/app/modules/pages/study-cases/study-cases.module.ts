import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgPrimeModule } from 'src/app/ngprime.module';
import { StudyCasesRoutingModule } from './study-cases-routing.module';
import { StudyCasePageComponent } from './study-case-page/study-case-page.component';
import { CEENFERMEDADCARDIACAComponent } from './SC/ce-enfermedad-cardiaca/ce-enfermedad-cardiaca.component';


@NgModule({
  declarations: [
  
    StudyCasePageComponent,
        CEENFERMEDADCARDIACAComponent
  ],
  imports: [
    CommonModule,
    NgPrimeModule,
    SharedModule,
    ReactiveFormsModule,
    StudyCasesRoutingModule
  ],
  exports: [
  ]
})
export class StudyCasesModule { }