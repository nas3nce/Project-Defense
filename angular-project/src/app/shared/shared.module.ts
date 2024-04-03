import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderShadowDirective } from './directives/border-shadow.directive';
import { SliceTextPipe } from './pipes/slice-text.pipe';
import { elapsedTimePipe } from './pipes/elapsedTime.pipe';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { MaterialModule } from 'src/material.module';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    BorderShadowDirective,
    SliceTextPipe,
    elapsedTimePipe,
    DeleteDialogComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    BorderShadowDirective,
    SliceTextPipe,
    elapsedTimePipe,
    DeleteDialogComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
