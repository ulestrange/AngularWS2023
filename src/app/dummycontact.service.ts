import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root',
})
export class DummycontactService {
  constructor() {}

  private dummyContactsData: Contact[] = [
    {
      _id: '65116b2728006d586523fe04',
      name: 'John Doe',
      email: 'jdoe123@gmail.com',
      phoneNumber: '087123455116b272867',
    },
    {
      _id: '60fd8ffe04',
      name: 'Jane Dodge',
      email: 'jdond123@gmail.com',
      phoneNumber: '0871232222',
    },
    {
      _id: '60f4',
      name: 'Una',
      email: 'una@gmail.com',
      phoneNumber: '08712fd',
    },
  ];

  getContacts(): Observable<Contact[]> {
    console.log('Dummy getContacts called');

    return of(this.dummyContactsData);
  }
}
