import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  isRegistered: boolean;


  constructor( private login: LoginService, private router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    // tslint:disable-next-line:triple-equals
    if (this.username == '' || this.password == '') {
      alert('Username/Password cannot be empty');
    }else {
      alert(this.username + ' ' + this.password + ' ');
      const user = {
         username: this.username,
         password: this.password,
       };
       this.login.registerUser(user)
       .subscribe(res => {
         if (res.result === 1) {
             this.isRegistered = true;
              alert('Registration Successful');
         this.router.navigate(['']);
           } else {
           this.isRegistered = false;
           alert('Registration Unsuccessful');
         }
       });
  }


}
}
