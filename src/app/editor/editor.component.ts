import { Component, OnInit } from '@angular/core';


import { Chord } from '../chords/shared/chord';


@Component({
  selector: 'kw-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  selectedChords: Chord[] = [];
  canRepeatChords: boolean = false;
  isChordsCollapsed: boolean = false;


  constructor() {
  }

  ngOnInit() {
  }

  addChord(chord) {
    if (this.canRepeatChords || !this.selectedChords.find(_chord => _chord.$key == chord.$key))
      this.selectedChords.push(chord);
  }

  clearSelection() {
    this.selectedChords = [];
  }

  toggleCanRepeatChords() {
    this.canRepeatChords = !this.canRepeatChords;
  }

}
