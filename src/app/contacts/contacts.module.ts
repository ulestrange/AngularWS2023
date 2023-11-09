import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { MaterialModule } from '../material.module';
import { ContactFormComponent } from './contact-form/contact-form.component';


@NgModule({
  declarations: [
    ContactListComponent,
    ContactDetailsComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    MaterialModule
  ]
})
export class ContactsModule { }
