import { Component, EventEmitter, Input, Output } from '@angular/core';
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



  @Input() contact? : Contact ;



  message: String = "";
  contactForm: FormGroup = new FormGroup({});
 

  

    constructor(private contactService: ContactService, private router: Router) { }

ngOnInit(): void {
  this.contactForm  = new FormGroup({
    name: new FormControl (this.contact?.name, [Validators.required, Validators.minLength(3)]),
    phoneNumber: new FormControl (this.contact?.phoneNumber, [Validators.required]),
    email: new FormControl(this.contact?.email, [Validators.required, Validators.email])

    })


}

    onSubmit(){
      console.log('form submitted with ');
      console.table(this.contactForm.value); 
      
      if (!this.contact){
      this.addNewContact(this.contactForm.value)
      }
      else {
        this.updateContact(this.contact._id, this.contactForm.value)
      }
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

    updateContact(id: string, updatedValues: Contact)
    {
      this.contactService.updateContact(id, {...updatedValues})
      .subscribe({
        next: contact => {   
          this.router.navigateByUrl('/contacts')
        },
        error: (err) => this.message = err
      }); 
    }

  }



