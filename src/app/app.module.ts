import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ContactsComponent } from './contacts/contacts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ContactsModule } from './contacts/contacts.module';
import { SharedModule } from './shared/shared.module'

import { AuthModule } from '@auth0/auth0-angular';
import { environment  } from '../environments/environment';

import { AuthHttpInterceptor } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ContactsModule,
    SharedModule,
    AuthModule.forRoot({...environment.auth0,

      //this will add an access to the three rotues
      // which change the database 
      // these routes need to be protected on the server side too
      // we are choosing to leave our get routes unprotected
      // so they need to be unprotected on the server side too
    httpInterceptor: {
      allowedList: [
        {
          uri:  `${environment.apiUri}/contacts/*`,
          httpMethod: 'PUT',
        },
        {
          uri:  `${environment.apiUri}/contacts`,
          httpMethod: 'POST',
        },
        {
          uri:  `${environment.apiUri}/contacts/*`,
          httpMethod: 'DELETE',
        },
       ]}
    })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
