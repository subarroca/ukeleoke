import { ChordFinger } from './chord-finger';

import * as _ from 'lodash';

export class Chord {
  strings: {
    0?: ChordFinger,
    1?: ChordFinger,
    2?: ChordFinger,
    3?: ChordFinger,
    4?: ChordFinger
  };
  firstFret: number;
  $key: string;

  constructor(options: {
    strings?: {
      0?: ChordFinger,
      1?: ChordFinger,
      2?: ChordFinger,
      3?: ChordFinger,
      4?: ChordFinger
    },
    firstFret?: number
  } = {}) {
    this.strings = _.forIn(options.strings, (finger => new ChordFinger(finger)));
    this.firstFret = options.firstFret || 1;
  }
}
