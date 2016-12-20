import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsComponent } from './songs.component';
import { ChordsModule } from '../chords/chords.module';
import { SharedModule } from '../shared/shared.module';
import { SongComponent } from './song/song.component';

@NgModule({
  imports: [
    CommonModule,
    ChordsModule,
    SharedModule
  ],
  declarations: [SongsComponent, SongComponent],
  exports: [
    SongsComponent,
    SongComponent
  ]
})
export class SongsModule { }
