import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Comment} from "./comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private api = 'http://padlet23.s2010456010.student.kwmhgb.at/api';

  constructor(private http: HttpClient) { }

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
