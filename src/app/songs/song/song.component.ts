import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Rx';
import { Chord } from '../../chords/shared/chord';
import { AngularFire } from 'angularfire2';
import { User } from '../../user/shared/user';
import { Song } from '../shared/song';


@Component({
  selector: 'kw-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit, OnChanges {
  @Input() song: Song;
  @Input() isEditing: boolean;

  creator$: Observable<User>;

  constructor(
    private af: AngularFire,
  ) { }

  ngOnInit() { }

  ngOnChanges(changes) {
    let song = changes['song'] ? changes['song'].currentValue : undefined;
    if (song) {
      this.creator$ = this.af.database.object(`users/${song.creator}`);
    }
  }

  removeChord(chord) {
    this.song.chords = _.without(this.song.chords, chord);
  }

}
