import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main/main.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent,
    data: { title: "Home" }
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: { title: 'Page Not Found' }
  },
  {
    path: 'spinner',
    component: SpinnerComponent
  },
  {
    path: 'cats',
    loadChildren: () => import('./cats/cats.module').then(m => m.CatsModule)
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
