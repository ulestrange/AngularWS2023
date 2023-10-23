import { Component } from '@angular/core';
import { Contact } from '../contact';
import { DummycontactService } from '../dummycontact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  contacts: Contact[] = [];
  message: String = ''

  constructor (private contactService: DummycontactService) {}

  ngOnInit(): void {
    this.contactService.getContacts().subscribe({
      next: (value: Contact[]) => this.contacts = value,
      complete: () => console.log('contact service finished'),
      error: (message) => this.message = message

    }) 

  }


}
