import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {

id: String | null= "";

constructor (private route: ActivatedRoute) {}

ngOnInit(): void{
  this.id = this.route.snapshot.paramMap.get('id')
}

}
