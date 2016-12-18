export class ChordFinger {
  finger: number;
  fret: number;

  constructor(options: {
    finger?: number,
    fret?: number
  } = {}) {
    this.finger = options.finger;
    this.fret = options.fret;
  }
}
