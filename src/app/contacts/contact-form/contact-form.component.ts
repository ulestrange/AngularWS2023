import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactForm : FormGroup = new FormGroup({
    name: new FormControl ('', [Validators.required, Validators.minLength(3)]),
    phoneNumber: new FormControl ('', [Validators.required]),
    email: new FormControl('', [Validators.required])
    })


    onSubmit(){
      console.log('forms submitted with ');
      console.table(this.contactForm.value);
      
    }
  }



