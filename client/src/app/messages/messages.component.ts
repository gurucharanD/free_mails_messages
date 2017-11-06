import { Component, OnInit } from '@angular/core';
import {LoginService } from '../login.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  sender: String;
  receiver: String;
  message: String;
sendMessage() {
  const newMessage = {
sender: this.sender,
receiver: this.receiver,
message: this.message
};

this.loginService.sendMessage(newMessage).subscribe(res => {
  console.log('hii');
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
