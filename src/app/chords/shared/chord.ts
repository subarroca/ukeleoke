import { ChordFinger } from './chord-finger';

import * as _ from 'lodash';

export class Chord {
  fingers: {
    0?: ChordFinger,
    1?: ChordFinger,
    2?: ChordFinger,
    3?: ChordFinger,
    4?: ChordFinger
  };
  firstFret: number;
  $key: string;

  constructor(options: {
    fingers?: {
      0?: ChordFinger,
      1?: ChordFinger,
      2?: ChordFinger,
      3?: ChordFinger,
      4?: ChordFinger
    },
    firstFret?: number
  } = {}) {
    this.fingers = _.forIn(options.fingers, (finger => new ChordFinger(finger)));
    this.firstFret = options.firstFret || 1;
  }
}
