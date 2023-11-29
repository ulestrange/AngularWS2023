import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularWS2023 - Una';



 constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService)
 {}


  ngOnInit()
  {
   //this.auth.user$.subscribe( res => console.log(res))
  }

}
