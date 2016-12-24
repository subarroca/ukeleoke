import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { KeysPipe } from './keys/keys.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  declarations: [KeysPipe],
  exports: [
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    KeysPipe
  ]
})
export class SharedModule { }
