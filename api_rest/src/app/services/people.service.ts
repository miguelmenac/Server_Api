import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError, tap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  serverUrl = 'http://localhost:3000/users';
  constructor(public http: HttpClient) { }


  getPeople(): Observable<any[]> {
    return this.http.get<any[]>(this.serverUrl).pipe(
      tap(data => console.log('ALL ' + JSON.stringify(data))),
      catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error ocurred ${ err.error.message }`;
    } else {
      errorMessage = `El servidor respondió: ${err.status}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
    }
}


