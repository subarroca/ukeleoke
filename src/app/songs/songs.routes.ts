import { Routes, RouterModule } from '@angular/router';

import { SongsComponent } from './songs.component';
import { SongEditorComponent } from './song-editor/song-editor.component';
import { CanActivateIsAuthenticated } from '../shared/can-activate-is-authenticated';

export const songRoutes: Routes = [
  {
    path: 'songs',
    component: SongsComponent
  },
  {
    path: 'song/new',
    component: SongEditorComponent,
    canActivate: [CanActivateIsAuthenticated]
  },
  {
    path: 'song/:id',
    component: SongEditorComponent
  }
];