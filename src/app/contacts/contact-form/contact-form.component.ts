import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  message: String = "";

  contactForm : FormGroup = new FormGroup({
    name: new FormControl ('', [Validators.required, Validators.minLength(3)]),
    phoneNumber: new FormControl ('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])

    })

    constructor(private contactService: ContactService, private router: Router) { }

    onSubmit(){
      console.log('form submitted with ');
      console.table(this.contactForm.value);    
      this.addNewContact(this.contactForm.value)
    }
    

    addNewContact(newContact: Contact): void {
      console.log('adding new contact ' + JSON.stringify(newContact));
      this.contactService.addContact({ ...newContact })
        .subscribe({
          next: contact => {   
            this.router.navigateByUrl('/contacts/' + contact._id)
          },
          error: (err) => this.message = err
        });  
    }

  }



