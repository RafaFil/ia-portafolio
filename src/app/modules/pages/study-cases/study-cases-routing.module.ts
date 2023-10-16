import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudyCasePageComponent } from './study-case-page/study-case-page.component';


const routes: Routes = [
  {
    path: ':id', component: StudyCasePageComponent 
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyCasesRoutingModule { }