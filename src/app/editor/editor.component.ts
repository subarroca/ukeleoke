import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


import { Chord } from '../chords/shared/chord';


@Component({
  selector: 'kw-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  selectedChords: Chord[] = [];
  canRepeatChords: boolean = false;


  // form
  canRepeatChordsControl: FormControl = new FormControl();
  libraryForm: FormGroup = new FormGroup({
    canRepeatChords: this.canRepeatChordsControl
  });

  constructor() {
  }

  ngOnInit() {
    this.canRepeatChordsControl.valueChanges
      .subscribe(value => this.canRepeatChords = value);
  }

  addChord(chord) {
    console.log(this.canRepeatChords);
    if (this.canRepeatChords || !this.selectedChords.find(_chord => _chord.$key == chord.$key))
      this.selectedChords.push(chord);
  }

  clearSelection() {
    this.selectedChords = [];
  }

}
