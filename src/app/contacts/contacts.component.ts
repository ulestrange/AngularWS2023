import { Component } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { DummycontactService } from '../dummycontact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  contacts: Contact[] = [];
  message: String = ''

  constructor (private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getContacts().subscribe({
      next: (value: Contact[]) => this.contacts = value,
      complete: () => console.log('contact service finished'),
      error: (message) => this.message = message

    }) 

  }


}
