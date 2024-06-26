import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { AddCatComponent } from './add-cat/add-cat.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';
import { CatsRoutingModule } from './cats-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/material.module';
import { SearchComponent } from './search/search.component';
import { EditCatComponent } from './edit-cat/edit-cat.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CatalogComponent,
    AddCatComponent,
    CatDetailsComponent,
    SearchComponent,
    EditCatComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    CatsRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class CatsModule { }
