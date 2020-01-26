import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

import { Observable, of } from "rxjs";
import { CalendarMetadata } from "../model/calendar-metadata";

import { Calendar } from "../model/calendar";

const id: string = "12345";

@Injectable({
  providedIn: "root"
})
export class CalendarService {
  private url = "api/";

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) {}

  createCalendar(calendar: Calendar) {
    console.log(calendar);
    return this.http.post<Calendar>(this.url, calendar, this.httpOptions).pipe(
      map(res => {
        console.log(res);
        return "currentId";
      }),
      catchError(this.handleError<string>("create Calendar"))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(operation, error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
