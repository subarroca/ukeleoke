import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';


import { AppComponent } from './app.component';
import { ChordsModule } from './chords/chords.module';
import { SongsModule } from './songs/songs.module';
import { EditorModule } from './editor/editor.module';




// Must export the config
export const firebaseConfig: FirebaseAppConfig = {
  apiKey: 'AIzaSyBXt3H_l6n1PdUhwwQ9EUgyaLVylYLm2IQ',
  authDomain: 'localhost',
  databaseURL: 'https://ukeleoke.firebaseio.com',
  storageBucket: ''
};



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ChordsModule,
    SongsModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }