import { Chord } from '../../chords/shared/chord';
import * as _ from 'lodash';

export class Song {
  // TODO: id should not be stored as its already $key
  // TODO: common structure should be made to clean objects sent to db
  // TODO: multiple similar songs should be allowed => id should be different
  id: string;
  title: string;
  author: string;
  creator: string;
  chords: Chord[];

  constructor(options: {
    id?: string,
    title?: string,
    author?: string,
    creator?: string,
    chords?: Chord[]
  } = {}) {
    this.id = options.id;
    this.title = options.title;
    this.author = options.author;
    this.creator = options.creator;
    this.chords = (options.chords || []).map(chord => new Chord(chord));
  }

  updateId() {
    this.id = _.kebabCase(this.title);
  }
}
