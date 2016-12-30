import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'kw-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {
  songs$: Observable<any>;


  constructor(
    private af: AngularFire
  ) { }

  ngOnInit() {
    this.songs$ = this.af.database.list('/songs');
  }

}
