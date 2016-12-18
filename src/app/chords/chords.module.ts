import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChordsComponent } from './chords.component';
import { ChordComponent } from './chord/chord.component';
import { SharedModule } from '../shared';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ChordsComponent,
    ChordComponent
  ],
  exports: [
    ChordsComponent
  ]
})
export class ChordsModule { }
