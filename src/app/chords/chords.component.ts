import { Component, OnInit } from '@angular/core';


import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Rx';
import * as _ from 'lodash';

import { Chord } from './shared/chord';


@Component({
  selector: 'kw-chords',
  templateUrl: './chords.component.html',
  styleUrls: ['./chords.component.scss']
})
export class ChordsComponent implements OnInit {

  chords: Observable<Chord[]>;

  constructor(private af: AngularFire) {
  }

  ngOnInit() {
    this.chords = this.af.database.list('chords');
      // .map(chords =>
      //   chords.map(chord => new Chord(chord))
      // );
  }

}
