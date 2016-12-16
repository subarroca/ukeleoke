import { Component } from '@angular/core';


import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Rx';



@Component({
  selector: 'kw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Observable<any[]>;

  constructor(af: AngularFire) {
    this.items = af.database.list('chords');
  }
}
