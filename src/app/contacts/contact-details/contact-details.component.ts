import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

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

constructor (public dialog: MatDialog, private router : Router, 
  private route: ActivatedRoute, private contactService: ContactService) {}

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
 this.openConfirmDeleteDialog();
}

editContact() {
  this.showForm = true;
}


openConfirmDeleteDialog(): void {
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    width: '450px',
    data: { title: "Delete Contact "+ this.contact?.name, 
     message: "Are you sure you want to delete a contact"}
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // User clicked "Yes", perform the delete operation
      this.deleteItem();
    } 
  });

}


deleteItem() {
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


}

