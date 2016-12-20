import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { ChordsModule } from '../chords/chords.module';
import { SongsModule } from '../songs/songs.module';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    ChordsModule,
    SongsModule,
    SharedModule
  ],
  declarations: [EditorComponent],
  exports: [EditorComponent]
})
export class EditorModule { }
