import { Injectable } from '@angular/core';
import { Proccess } from './proccess';
import { PROCS } from './mock-ps';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProccessService {

  //http://127.0.0.1:5000/moitroize
  private tasksUrl = '/moitroize';  // URL to web api
  private executeProccessUrl = '/executeProccess';  // URL to web api

  constructor(private http: HttpClient) { }

  proccesses = PROCS;

  getProccesses(): Observable<Proccess[]> {
    //return of(PROCS);

    return this.http.get<Proccess[]>(this.tasksUrl)
    .pipe(
      catchError(this.handleError('getProccesses', []))
    );

  }

  executeProccess(evt): void {
    this.http.get(this.executeProccessUrl, {
     params: {
       processId: evt
     },
     observe: 'response'
   })
   .toPromise()
   .then(response => {
     console.log(response);
   })
   .catch(console.log);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
}


}
