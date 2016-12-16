import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';


import { AppComponent } from './app.component';




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
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
