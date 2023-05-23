import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Entrie} from "./entrie";

@Injectable({
  providedIn: 'root'
})
export class EntrieService {

  private api = 'http://padlet23.s2010456010.student.kwmhgb.at/api';


  constructor(private http: HttpClient) { }

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

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }

}
