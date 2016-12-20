import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Chord } from '../shared/chord';
import { ChordFinger } from '../shared/chord-finger';


@Component({
  selector: 'kw-chord',
  templateUrl: './chord.component.html',
  styleUrls: ['./chord.component.scss']
})
export class ChordComponent implements OnInit, OnChanges {
  @Input() chord: Chord;
  @Input() name: string;


  private stringOffset: number = 24;
  private stringDelta: number = 24;
  private fretOffset: number = 16;
  private fretDelta: number = 24;


  private strings;


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['chord']) {
      this.chord = new Chord(this.chord);
      this.strings = this.chord.strings;
    }
  }

  getFingerX(string: number) {
    return this.stringDelta * (4 - string) + this.stringOffset;
  }

  getFingerY(finger: ChordFinger) {
    return this.fretDelta * (finger.fret - this.chord.firstFret) + this.fretOffset;
  }

}
