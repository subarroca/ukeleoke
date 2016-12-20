import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { AngularFire } from 'angularfire2';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import * as _ from 'lodash';

import { Chord } from '../chords/shared/chord';


@Component({
  selector: 'kw-chords',
  templateUrl: './chords.component.html',
  styleUrls: ['./chords.component.scss']
})
export class ChordsComponent implements OnInit {
  @Output() chordSelect:EventEmitter<Chord>=new EventEmitter<Chord>();

  chords: Observable<{}>;
  currentChordGroup: Chord[];
  currentChord: Chord;


  constructor(
    private af: AngularFire
  ) { }

  ngOnInit() {
    this.chords = this.af.database.list('chords')
      .map(chords =>
        _.chain(chords)
          .groupBy(chord => {
            if (chord.$key[1] === '♭') {
              return chord.$key.slice(0,2);
            } else {
              return chord.$key[0];
            }
          })
          .value()
      );
  }

  selectGroup(group:Chord[]) {
    this.currentChordGroup = group;
  }

  clearSelectedGroup() {
    this.currentChordGroup = undefined;
  }

  selectChord(chord:Chord) {
    this.chordSelect.emit(chord);
  }

}
