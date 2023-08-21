import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/pages/landing/landing.module').then( m => m.LandingModule ),
  },
  {
    path: 'main',
    loadChildren: () => import('./modules/pages/main/main.module').then( m => m.MainModule ),
  },
  {
    path: 'main/article/:id',
    loadChildren: () => import('./modules/pages/article/article.module').then( m => m.ArticleModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
