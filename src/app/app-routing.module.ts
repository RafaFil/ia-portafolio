import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/pages/landing/landing.module').then( m => m.LandingModule ),
  },
  {
    path: 'main/article/:id',
    loadChildren: () => import('./modules/pages/article/article.module').then( m => m.ArticleModule )
  },
  {
    path: 'theme/:theme',
    loadChildren: () => import('./modules/pages/topic-page/topic-page.module').then( m => m.TopicPageModule )
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/pages/about/about-page.module').then( m => m.AboutPageModule )
  },
  {
    path: 'studycase',
    loadChildren: () => import('./modules/pages/study-cases/study-cases.module').then(m => m.StudyCasesModule)
  },
  {
    path: '**',
    loadChildren: () => import('./modules/pages/error/error.module').then( m => m.ErrorModule )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
