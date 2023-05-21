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

  getUserName(id: string | undefined):Observable<any>{
    return this.http.get(`${this.api}/padlets/username/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getAllEntries(id:number):Observable<Entrie[]>{
    return this.http.get<Entrie[]>(`${this.api}/padlets/${id}/entries`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getEntryById(id:number):Observable<Entrie>{
    return this.http.get<Entrie>(`${this.api}/entries/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  createEntrie(id:number, entrie:Entrie):Observable<any>{
    return this.http.post(`${this.api}/padlets/${id}/entries`, entrie)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  updateEntrie(id:number, entrie:Entrie):Observable<any>{
    return this.http.put(`${this.api}/padlets/${id}/entries/${entrie.id}`, entrie)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  removeEntrie(id:number | undefined, entrieid: number | undefined): Observable<any>{
    return this.http.delete(`${this.api}/padlets/${id}/entries/${entrieid}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getAllRatings(padletid:number, entrieid:number|undefined):Observable<Rating[]>{
    return this.http.get<Rating[]>(`${this.api}/padlets/${padletid}/entries/${entrieid}/ratings`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  createRating(padletid:number |undefined, entrieid:number|undefined, rating: Rating):Observable<any>{
    return this.http.post(`${this.api}/padlets/${padletid}/entries/${entrieid}/ratings`, rating)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getAllComments(padletid:number, entrieid:number|undefined):Observable<Comment[]>{
    return this.http.get<Comment[]>(`${this.api}/padlets/${padletid}/entries/${entrieid}/comments`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  createComment(padletid:number |undefined, entrieid:number|undefined, comment: Comment):Observable<any>{
    return this.http.post(`${this.api}/padlets/${padletid}/entries/${entrieid}/comments`, comment)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }
}
