import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Rx';
// for switchMap
import 'rxjs';
import { FirebaseAuth } from 'angularfire2';

import { Chord } from '../../chords/shared/chord';


@Component({
  selector: 'kw-song-editor',
  templateUrl: './song-editor.component.html',
  styleUrls: ['./song-editor.component.scss']
})
export class SongEditorComponent implements OnInit {

  selectedChords: Chord[] = [];
  canRepeatChords: boolean = false;
  isChordsCollapsed: boolean = false;

  isEditing: boolean = false;

  isNew$: Observable<boolean>;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private auth$: FirebaseAuth
  ) {
  }

  ngOnInit() {
    this.isNew$ = this.activeRoute.params
      .filter(params => params['id'] === 'new')
      .switchMap(params => params['id']);
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

  save() {
    this.isEditing = false;
  }

  edit() {
    this.isEditing = true;
  }
}
