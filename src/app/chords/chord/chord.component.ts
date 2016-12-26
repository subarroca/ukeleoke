import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

// import * as MIDI from 'midijs';

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

  play() {
    // console.log(MIDI);

    // MIDI.loadPlugin({
    //   soundfontUrl: "./soundfont/",
    //   instrument: "acoustic_grand_piano",
    //   onprogress: function(state, progress) {
    //     console.log(state, progress);
    //   },
    //   onsuccess: function() {
    //     var delay = 0; // play one note every quarter second
    //     var note = 50; // the MIDI note
    //     var velocity = 127; // how hard the note hits
    //     // play the note
    //     MIDI.setVolume(0, 127);
    //     MIDI.noteOn(0, note, velocity, delay);
    //     MIDI.noteOff(0, note, delay + 0.75);
    //   }
    // });

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
