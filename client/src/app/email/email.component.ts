import { Component, OnInit } from '@angular/core';
import {LoginService } from '../login.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  sender: String;
  receiver: String;
  subject: String;
  message: String;
  password: String;

  ngOnInit() {
  }

  sendEmail() {
    const newMail = {
      sender: this.sender,
      receiver: this.receiver,
      subject: this.subject,
      message: this.message,
      password: this.password
    };

    console.log(newMail);

    this.loginService.sendEmail(newMail).subscribe(mail => {
      console.log('hii');
      if (mail) {
        console.log(mail.msg);
        alert('mail sent successfully');
      }else {
        alert('sending mail failed');
      }
    });
  }

}