import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {

  contacts$: Observable<Contact[]>  ;


  constructor (private contactService: ContactService) {
    this.contacts$ = this.contactService.getContacts();
  }

}
