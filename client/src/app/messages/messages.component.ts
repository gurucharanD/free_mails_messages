import { Component, OnInit } from '@angular/core';
import {LoginService } from '../login.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  sender: String;
  receiver: String;
  message: String;

  navigate() {
    this.router.navigateByUrl('/email');
  }
  logouts() {
    this.router.navigateByUrl('/');
  }

sendMessage() {
  const newMessage = {
sender: this.sender,
receiver: this.receiver,
message: this.message
};

this.loginService.sendMessage(newMessage).subscribe(res => {
  if (res) {
    alert('message sent successfully');
    window.location.reload();
  }else {
    alert('sending message failed');
    window.location.reload();
  }
});

}

  ngOnInit() {
  }

}
