import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderShadowDirective } from './directives/border-shadow.directive';
import { SliceTextPipe } from './pipes/slice-text.pipe';
import { TimeFormatPipe } from './pipes/time-format.pipe';



@NgModule({
  declarations: [
    BorderShadowDirective,
    SliceTextPipe,
    TimeFormatPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BorderShadowDirective,
    SliceTextPipe,
    TimeFormatPipe
  ]
})
export class SharedModule { }
