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

  /// calls GET /contacts

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

  /// takes an id and sends a get request for that
  // individual resource. GET /contacts/:id

  getContact(id: string): Observable<Contact> {

    let contactURI = `${this.dataUri}/${id}`

    console.log(contactURI)

   return this.http.get<Contact>(contactURI)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }


  // takes a contact object and calls
  // POST /contacts with the contact details in the body

  /** adapted from https://angular.io/guide/http-send-data-to-server */
addContact(contact: Contact): Observable<Contact> {
  return this.http.post<Contact>(this.dataUri, contact)
    .pipe(
      catchError(this.handleError)
    );
}

// takes a contact id and calls DELETE /contacts/:id

deleteContact(id: string): Observable<unknown> {
  const url = `${this.dataUri}/${id}`; // DELETE 
  return this.http.delete(url)
    .pipe(
      catchError(this.handleError)
    );
}

// takes a contact id and a contact object and calls
// PUT /contacts/:id with the contact object is the body.

updateContact(id: string, contact: Contact): Observable<Contact> {
  console.log('subscribing to update/' + id);
  let contactURI: string = this.dataUri + '/' + id;
  return this.http.put<Contact>(contactURI, contact)
    .pipe(
      catchError(this.handleError)
    )
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
