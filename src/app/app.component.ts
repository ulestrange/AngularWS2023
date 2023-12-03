import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularWS2023 - Una';



  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService,

  ) {}


  handleLogOut() {
    this.auth.logout({
    });
  }


  handleLogIn() {
   this.auth.loginWithRedirect({
      appState: {
        target: this.document.location.pathname,
      },
    });
  }
}
