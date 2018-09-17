import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProccessesComponent } from './proccesses/proccesses.component';
import { DownloadCsvComponent } from './download-csv/download-csv.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule, Routes } from '@angular/router';
import { QualityAssuranceComponent } from './quality-assurance/quality-assurance.component';
import { DataDashboardComponent } from './data-dashboard/data-dashboard.component';
import {RoundProgressModule} from 'angular-svg-round-progressbar';


const appRoutes: Routes = [
  { path: 'download', component: DownloadCsvComponent },
  { path: 'dashboard',      component: ProccessesComponent },
  { path: 'quality',      component: QualityAssuranceComponent },
  { path: 'data-dashboard',      component: DataDashboardComponent },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**', component: DownloadCsvComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProccessesComponent,
    DownloadCsvComponent,
    QualityAssuranceComponent,
    DataDashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    RoundProgressModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent,DownloadCsvComponent]
})
export class AppModule { }
