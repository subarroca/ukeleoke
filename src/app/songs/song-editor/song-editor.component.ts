import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdSnackBar } from '@angular/material';

import { Observable, Subscription } from 'rxjs/Rx';
// import switchMap
import 'rxjs';
import { FirebaseAuth, AngularFire } from 'angularfire2';

import { Chord } from '../../chords/shared/chord';
import { Song } from '../shared/song';


@Component({
  selector: 'kw-song-editor',
  templateUrl: './song-editor.component.html',
  styleUrls: ['./song-editor.component.scss']
})
export class SongEditorComponent implements OnInit, OnDestroy {

  // song.chords: Chord[] = [];
  canRepeatChords: boolean = false;
  isChordsCollapsed: boolean = false;

  isEditing: boolean = false;
  isNew: boolean;
  isNew$$: Subscription;
  auth$$: Subscription;
  currentUid: string;

  song$$: Subscription;
  serverSong: Song;
  song: Song = new Song();


  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private auth$: FirebaseAuth,
    private snackBar: MdSnackBar,
    private af: AngularFire
  ) {
  }

  ngOnInit() {
    let currentId;

    this.isNew$$ = this.activeRoute.data
      .map(data => data['isNew'])
      .first()
      .subscribe(value => {
        this.isNew = value
        this.isEditing = true;
      });

    this.song$$ = this.activeRoute.params
      .filter(params => params['id'])
      .switchMap(params => {
        currentId = params['id'];
        return this.af.database.object(`/songs/${currentId}`)
      })
      .subscribe(song => {
        song.id = currentId
        this.song = new Song(song);
        this.serverSong = song;
      });

    this.auth$$ = this.auth$
      .subscribe(user => {
        this.currentUid = user ? user.uid : null;
        if (this.isNew) {
          this.song.creator = this.currentUid;
          // so changes are taken into account in children
          this.song = new Song(this.song);
        }
      });
  }

  ngOnDestroy() {
    if (this.auth$$) {
      this.auth$$.unsubscribe();
    }

    if (this.song$$) {
      this.song$$.unsubscribe();
    }

    if (this.isNew$$) {
      this.isNew$$.unsubscribe();
    }
  }

  addChord(chord) {
    if (this.canRepeatChords || !this.song.chords.find(_chord => _chord.$key == chord.$key))
      this.song.chords.push(chord);
  }

  clearSelection() {
    this.song.chords = [];
  }

  toggleCanRepeatChords() {
    this.canRepeatChords = !this.canRepeatChords;
  }

  save() {
    if (this.isNew) {
      this.song.updateId();
    }
    this.af.database.object(`/songs/${this.song.id}`)
      .set(this.song)
      .then(() => {
        this.isEditing = false;
        this.snackBar.open('Saved!', 'dismiss', {
          duration: 2000,
        });

        if (this.isNew) {
          this.router.navigate(['/song/', this.song.id]);
        }
      });
  }

  edit() {
    this.isEditing = true;
  }

  showNotLogged() {
    this.snackBar.open('You must be logged to save songs', 'dismiss', {
      duration: 2000,
    });
  }

  get canEdit() {
    return !this.isEditing && this.isOwner;
  }

  get canSave() {
    return this.isEditing && this.isOwner;
  }

  get isOwner() {
    return this.song && this.currentUid === this.song.creator;
  }

  get isLogged() {
    return this.currentUid !== null;
  }
}
