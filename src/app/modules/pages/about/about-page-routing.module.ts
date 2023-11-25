import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { LinkedinPagesComponent } from './linkedin-pages/linkedin-pages.component';


const routes: Routes = [
  {
    path: '', component: AboutPageComponent
  },
  {
    path: 'linkedin', component: LinkedinPagesComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutPageRoutingModule { }