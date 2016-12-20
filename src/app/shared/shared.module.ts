import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { KeysPipe } from './keys/keys.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [KeysPipe],
  exports: [
    ReactiveFormsModule,
    KeysPipe
  ]
})
export class SharedModule { }
