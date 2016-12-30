import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';
import { Chord } from '../../chords/shared/chord';
import { AngularFire } from 'angularfire2';


@Component({
  selector: 'kw-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
  @Input() chords: Chord[];
  @Output() chordsChange: EventEmitter<Chord[]> = new EventEmitter<Chord[]>();
  @Input() isEditing: boolean;

  constructor(
    private af: AngularFire
  ) { }

  ngOnInit() {
    // this.af.database.object.ge
  }

  removeChord(chord) {
    this.chords = _.without(this.chords, chord);
    this.chordsChange.emit(this.chords);
  }

}
