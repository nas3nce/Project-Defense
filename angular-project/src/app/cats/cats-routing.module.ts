import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCatComponent } from './add-cat/add-cat.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';
import { SearchComponent } from './search/search.component';
import { EditCatComponent } from './edit-cat/edit-cat.component';

const routes: Routes = [
  {
    path: 'cats',
    children: [
      {
        path: 'add',
        component: AddCatComponent,
        data: { title: 'Create Post' }
      },
      {
        path: 'catalog',
        component: CatalogComponent,
        data: { title: 'Catalog' }
      },
      {
        path: 'catalog/:details',
        component: CatDetailsComponent,
        data: { title: 'Details' }
      },
      {
        path: 'catalog/:details/edit',
        component: EditCatComponent,
        data: { title: 'Edit' }
      },
      {
        path: 'search',
        component: SearchComponent,
        data: { title: 'Search' }
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatsRoutingModule { }
