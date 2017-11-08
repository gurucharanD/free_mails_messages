import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'angular2-cookie/services/cookies.service';



import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { EmailComponent } from './email/email.component';
import {LoginService } from './login.service';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const appRoutes: Routes = [
{path: '', component: LoginComponent},
{path: 'email', component: EmailComponent},
{path: 'message', component: MessagesComponent},
{path: 'register', component: RegisterComponent},
{path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MessagesComponent,
    EmailComponent,
    LoginComponent,
    RegisterComponent
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
