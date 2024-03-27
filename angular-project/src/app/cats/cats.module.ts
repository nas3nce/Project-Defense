import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { AddCatComponent } from './add-cat/add-cat.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';
import { MaterialModule } from 'src/material.module';
import { CatsRoutingModule } from './cats-routing.module';



@NgModule({
  declarations: [
    CatalogComponent,
    AddCatComponent,
    CatDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CatsRoutingModule
  ]
})
export class CatsModule { }
