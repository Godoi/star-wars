import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { Films } from "./core/models/films";
import { People } from "./core/models/people";

/*Api*/
import { ApiUrl } from './shared/constants';

@Injectable({ providedIn: "root" })
export class DataService {
  protected endpoint;

  constructor(private http: HttpClient) {}

  getPeople(): Observable<People[]> {
    this.endpoint = `${ApiUrl}people/`;
    return this.http
      .get<People[]>(this.endpoint)
      .pipe(
        tap(peoples => console.log(`Fetched People`)),
        catchError(this.handleError("getPeople", []))
      );
  }

  getSpecificPeople(id: number): Observable<People> {
    this.endpoint = `${ApiUrl}people/${id}`;
    return this.http
      .get<People>(this.endpoint)
      .pipe(
      tap(people => console.log(`Fetched Specific People`)),
        catchError(this.handleError<People>(`getSpecificPeople id=${id}`))
      );
  }

  getFilms(): Observable<Films[]> {
    this.endpoint = `${ApiUrl}films/`;
    return this.http
      .get<Films[]>(this.endpoint)
      .pipe(
        tap(films => console.log(`Fetched Films`)),
        catchError(this.handleError("getFilms", []))
      );
  }

  getFilm(id: number): Observable<Films> {
    this.endpoint = `${ApiUrl}films/${id}`;
    return this.http
      .get<Films>(this.endpoint)
      .pipe(
        tap(films => console.log(`Fetched Film`)),
        catchError(this.handleError<Films>(`getFilm id=${id}`))
      );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}