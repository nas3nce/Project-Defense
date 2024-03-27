import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCatComponent } from './add-cat/add-cat.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddCatComponent
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'details',
    component: CatDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatsRoutingModule { }
