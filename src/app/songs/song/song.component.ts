import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';
import { Chord } from '../../chords/shared/chord';


@Component({
  selector: 'kw-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
  @Input() chords:Chord[];
  @Output() chordsChange:EventEmitter<Chord[]> = new EventEmitter<Chord[]>();

  constructor() { }

  ngOnInit() {
  }

  removeChord(chord) {
    this.chords = _.without(this.chords, chord);
    this.chordsChange.emit(this.chords);
  }

}
