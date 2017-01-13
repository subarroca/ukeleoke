import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UserTagComponent } from './user-tag/user-tag.component';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ UserTagComponent, UserLoginComponent],
  exports:[ UserTagComponent, UserLoginComponent]
})
export class UserModule { }
