import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { EmailComponent } from './email/email.component';
import {LoginService } from './login.service';
import { HttpModule } from '@angular/http';


const appRoutes: Routes = [
{path: 'email', component: EmailComponent},
{path: 'message', component: MessagesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MessagesComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
   ],
  providers: [LoginService, HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
