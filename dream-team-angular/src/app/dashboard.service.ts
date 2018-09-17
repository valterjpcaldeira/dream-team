import { Injectable } from '@angular/core';
import { DashboardData } from './dashboard-data';
import { DashboardData2 } from './dashboard-data2';
import { DashboardData3 } from './dashboard-data3';
import { DASS } from './mock-dash';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private tasksUrl = '/dataDashboard';  // URL to web api
  private tasksUrl2 = '/dataDashboard2';
  private tasksUrl3 = '/dataDashboard3';

  constructor(private http: HttpClient) { }

  data = DASS;

  getDashboardData(): Observable<DashboardData> {
    //return of(DASS);
    return this.http.get<DashboardData>(this.tasksUrl);
  }

  getDashboardData2(): Observable<DashboardData2> {
    //return of(DASS);
    return this.http.get<DashboardData2>(this.tasksUrl2);
  }

  getDashboardData3(): Observable<DashboardData3> {
    //return of(DASS);
    return this.http.get<DashboardData3>(this.tasksUrl3);
  }
}
