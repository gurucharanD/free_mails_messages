import { Component, OnInit } from '@angular/core';
import {LoginService } from '../login.service';
import { RouterModule, Routes, Router } from '@angular/router';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  sender: String;
  receiver: String;
  subject: String;
  message: String;
  password: String;

  ngOnInit() {
  }
  navigateTo() {
    this.router.navigateByUrl('/message');
  }
  logout() {
    this.router.navigateByUrl('/');
  }
  sendEmail() {
    const newMail = {
      email: this.sender,
      receiver: this.receiver,
      subject: this.subject,
      message: this.message,
      password: this.password
    };

    this.loginService.sendEmail(newMail).subscribe(mail => {
      if (mail) {
        alert('mail sent successfully');
        window.location.reload();
      }else {
        alert('sending mail failed');
        window.location.reload();
      }
    });
  }

}
