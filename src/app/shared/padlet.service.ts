import { Injectable } from '@angular/core';
import {Padlet, User} from "./padlet";
import {catchError, Observable, retry, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Entrie} from "./entrie";
import {Rating} from "./rating";
import {Comment} from "./comment";

@Injectable(
)
export class PadletService {

  private api = 'http://padlet23.s2010456010.student.kwmhgb.at/api';

  constructor(private http: HttpClient) {}

  getAllPadlets(): Observable<Array<Padlet>>{
    return this.http.get<Array<Padlet>>(`${this.api}/padlets`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getSinglePadlet(id: number): Observable<Padlet> {
    return this.http.get<Padlet>(`${this.api}/padlets/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  createPadlet(padlet: Padlet): Observable<any> {
    return this.http.post(`${this.api}/padlets`, padlet)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  updatePadlet(padlet: Padlet): Observable<any> {
    return this.http.put(`${this.api}/padlets/${padlet.id}`, padlet)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  removePadlet(id: number): Observable<any> {
    return this.http.delete(`${this.api}/padlets/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }


  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }
}
