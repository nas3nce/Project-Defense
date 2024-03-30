import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderShadowDirective } from './directives/border-shadow.directive';



@NgModule({
  declarations: [
    BorderShadowDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BorderShadowDirective
  ]
})
export class SharedModule { }
