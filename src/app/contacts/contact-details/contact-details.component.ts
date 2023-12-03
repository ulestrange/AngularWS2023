import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {

id: string | null= "";
message: string = ""
showForm: boolean = false;
contact$ : Observable<Contact> = EMPTY;

contact?: Contact;

constructor (public dialog: MatDialog, private router : Router, 
  private route: ActivatedRoute, private contactService: ContactService,
  private snackBar: MatSnackBar) {}

ngOnInit(): void{
  this.id = this.route.snapshot.paramMap.get('id');
  console.log('router.url ' + this.router.url);

  // console.log('path '  + this.route.snapshot.pathFromRoot.)

if (this.id) {

  this.contact$ = this.contactService.getContact(this.id);


  this.contactService.getContact(this.id).subscribe({
    next: (value: Contact) => this.contact = value,
    complete: () => console.log('contact service finished'),
    error: (message) => {
      this.openErrorSnackBar (message);
    }
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


openErrorSnackBar(message: string): void {
  this.snackBar.open(message, 'Dismiss', {
    duration: 15000, // Set the duration for how long the snackbar should be visible (in milliseconds)
    panelClass: ['error-snackbar'], // You can define custom styles for the snackbar
  });
}

}

