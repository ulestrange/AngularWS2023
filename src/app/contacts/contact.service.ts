import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private dataUri = `${environment.apiUri}/contacts`;

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {

    console.log("get contacts called" );

   const options =  {
     headers: new HttpHeaders().set('X-API-key', 'abcde12345'),
    // params: new HttpParams().set('name', 'una')
     };
  
   return this.http.get<Contact[]>(`${this.dataUri}`, options)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

    //taken from: https://angular.io/guide/http

    private handleError(error: HttpErrorResponse) {
      if (error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, body was: `, error.error);
      }
      // Return an observable with a user-facing error message.
      return throwError(() => new Error('Something bad happened; please try again later.'));
    }
  



}
