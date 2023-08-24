import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { StudyCaseCarrouselComponent } from './components/study-case-carrousel/study-case-carrousel.component';


const routes: Routes = [
  {
    path: '', component: MainPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }