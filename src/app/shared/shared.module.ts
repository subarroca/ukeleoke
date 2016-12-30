import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { KeysPipe } from './keys/keys.pipe';
import { CanActivateIsAuthenticated } from './can-activate-is-authenticated';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  declarations: [KeysPipe],
  exports: [
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    KeysPipe
  ],
  providers: [
    CanActivateIsAuthenticated
  ]
})
export class SharedModule { }
