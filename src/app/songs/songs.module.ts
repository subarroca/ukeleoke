import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SongsComponent } from './songs.component';
import { ChordsModule } from '../chords/chords.module';
import { SharedModule } from '../shared/shared.module';
import { SongComponent } from './song/song.component';
import { SongEditorComponent } from './song-editor/song-editor.component';
import { songRoutes } from './songs.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(songRoutes),
    ChordsModule,
    SharedModule,
  ],
  declarations: [
    SongsComponent,
    SongComponent,
    SongEditorComponent,
  ],
  exports: [
    SongsComponent
  ]
})
export class SongsModule { }
