import { Component, OnInit } from '@angular/core';


import { AngularFire } from 'angularfire2';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import * as _ from 'lodash';

import { Chord } from './shared/chord';


@Component({
  selector: 'kw-chords',
  templateUrl: './chords.component.html',
  styleUrls: ['./chords.component.scss']
})
export class ChordsComponent implements OnInit {

  chords: Observable<{}[]>;
  currentChordGroup: Chord[];
  currentChord: Chord;
  selectedChords: Chord[] = [];

  constructor(private af: AngularFire) {
  }

  ngOnInit() {
    this.chords = this.af.database.list('chords')
      .map(chords =>
        _.chain(chords)
          .groupBy(chord => chord.$key[0])
          .values()
          .value()
      );
  }

  selectGroup(group) {
    this.currentChordGroup = group;
  }

  selectChord(chord) {
    this.currentChord = chord;
  }

  addChord(chord) {
    if (!this.selectedChords.find(_chord => _chord.$key == chord.$key))
      this.selectedChords.push(chord);
  }

  removeChord(chord) {
    this.selectedChords = _.without(this.selectedChords, chord);
  }

  clearSelection() {
    this.selectedChords = [];
  }

}
