import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Rating} from "./rating";

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private api = 'http://padlet23.s2010456010.student.kwmhgb.at/api';

  constructor(private http: HttpClient) { }

  getAllRatings(padletid:number, entrieid:number|undefined):Observable<Rating[]>{
    return this.http.get<Rating[]>(`${this.api}/padlets/${padletid}/entries/${entrieid}/ratings`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  createRating(padletid:number |undefined, entrieid:number|undefined, rating: Rating):Observable<any>{
    return this.http.post(`${this.api}/padlets/${padletid}/entries/${entrieid}/ratings`, rating)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  checkIfUserHasAlreadyRated(entrieid:number|undefined, userid:number|undefined) : Observable<boolean>{
    return this.http.get<boolean>(`${this.api}/entries/${entrieid}/ratings/${userid}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }

}
