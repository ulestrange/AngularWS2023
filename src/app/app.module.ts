import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ContactsComponent } from './contacts/contacts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ContactsModule } from './contacts/contacts.module';
import { SharedModule } from './shared/shared.module'

import { AuthModule } from '@auth0/auth0-angular';
import { environment  } from '../environments/environment';


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
    AuthModule.forRoot({...environment.auth0,})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
