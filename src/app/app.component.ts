import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularWS2023 - Una';



 constructor(@Inject(DOCUMENT) public document: Document, 
 public auth: AuthService, private router: Router)
 {}


  ngOnInit()
  {
    console.log('router.url from app.component ' + this.router.url);
    console.log(this.document.location.origin); 
    console.log(window.location.origin);

   //this.auth.user$.subscribe( res => console.log(res))
  }

  handleLogOut()
  {
    console.log('loggout out ' + this.document.location.origin);
    this.auth.logout({
      logoutParams: {
        returnTo: this.document.location.origin,
      },
    });

  }

  handleLogIn()
  {
    console.log('logging out ' + this.document.location.origin);
    this.auth.loginWithRedirect({
      appState: {
        target: this.document.location.origin,
      },
    });
  }

}
