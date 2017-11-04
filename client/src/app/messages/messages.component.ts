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

this.loginService.sendEmail(newMessage).subscribe(res => {
  console.log('hii');
  if (res) {
    console.log(res.msg);
    alert('message sent successfully');
  }else {
    alert('sending message failed');
  }
});

}

  ngOnInit() {
  }

}
