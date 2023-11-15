import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
showForm: boolean = false;

contact?: Contact;

constructor (private router : Router, private route: ActivatedRoute, private contactService: ContactService) {}

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

deleteContact() {
    this.contactService.deleteContact(this.contact?._id)
      .subscribe({
        next: contact => {
          console.log(JSON.stringify(contact) + ' has been deleted');
          this.message = "contact has been deleted";
          this.router.navigateByUrl( '/contacts');
        },
        error: (err) => this.message = err
      }); 
}

editContact() {
  this.showForm = true;
}

}

