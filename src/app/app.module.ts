import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    // другие модули
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

