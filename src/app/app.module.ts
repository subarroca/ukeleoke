import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AngularFireModule, FirebaseAppConfig, AuthProviders, AuthMethods } from 'angularfire2';


import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { EditorModule } from './editor/editor.module';
import { UserModule } from './user/user.module';




const firebaseConfig: FirebaseAppConfig = {
  apiKey: 'AIzaSyBXt3H_l6n1PdUhwwQ9EUgyaLVylYLm2IQ',
  authDomain: 'ukeleoke.firebaseapp.com',
  databaseURL: 'https://ukeleoke.firebaseio.com',
  storageBucket: "ukeleoke.appspot.com",
  // messagingSenderId: "208956292271"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
}



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule
      .initializeApp(firebaseConfig, firebaseAuthConfig),
    SharedModule,
    EditorModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
