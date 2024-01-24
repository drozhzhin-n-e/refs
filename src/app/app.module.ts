import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { FirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    // другие объявления компонентов...
  ],
  imports: [
    // другие модули
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    ReactiveFormsModule,
    FirestoreModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

