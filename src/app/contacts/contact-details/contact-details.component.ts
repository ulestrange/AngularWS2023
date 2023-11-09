import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {

id: string | null= "";
message: string = ""

contact?: Contact;

constructor (private route: ActivatedRoute, private contactService: ContactService) {}

ngOnInit(): void{
  this.id = this.route.snapshot.paramMap.get('id');

if (this.id) {
  this.contactService.getContact(this.id).subscribe({
    next: (value: Contact) => this.contact = value,
    complete: () => console.log('contact service finished'),
    error: (message) => this.message = message
  })
}

}

}

