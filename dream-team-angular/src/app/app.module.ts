import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProccessesComponent } from './proccesses/proccesses.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule, Routes } from '@angular/router';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
// for database
import { AngularFireDatabase } from 'angularfire2/database';
// for Observables
import { AngularFireObject, AngularFireList } from 'angularfire2/database';
import {AngularFireModule} from 'angularFire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


const appRoutes: Routes = [
  { path: 'dashboard',      component: ProccessesComponent },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**', component: ProccessesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProccessesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    RoundProgressModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
