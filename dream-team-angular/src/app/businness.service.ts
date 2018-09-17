import { Injectable } from '@angular/core';
import { Businness } from './businness';
import { Proccess } from './proccess';
import { BUSS } from './mock-b';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BusinnessService {

  //http://127.0.0.1:5000/moitroize
  private tasksUrl = '/randomBusinness';  // URL to web api
  private approveURL = '/approveURL'

  constructor(private http: HttpClient) { }

  getRandomBusinness(): Observable<Businness> {
    //return of(BUSS);
    return this.http.get<Businness>(this.tasksUrl);
  }

  approve(evt,bool): void {
    this.http.get(this.approveURL, {
     params: {
       crn: evt,
       approved: bool
     },
     observe: 'response'
   })
   .toPromise()
   .then(response => {
   })
   .catch(console.log);
  }


}
