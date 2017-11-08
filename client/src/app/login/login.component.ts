
import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  isLoggedIn = false;
  constructor(private router: Router, private loginService: LoginService) {
  }

  ngOnInit() {
    // tslint:disable-next-line:triple-equals
    if (Cookie.get('isLoggedIn') == '1') {
    this.router.navigate(['']);
    }
  }

  navigateToRegister() {
    this.router.navigateByUrl('/register');
  }


  checkLogin() {
    // validate the user here
    if (this.username == '' || this.password == '') {
      alert('Username/Password cannot be empty');
    }else {
     const user = {
         username: this.username,
         password: this.password,
       };
       this.loginService.isValidUser(user)
       .subscribe(res => {
         if (res.result == 1) {
             this.isLoggedIn = true;
             this.router.navigateByUrl('/dashboard');
             
        Cookie.set('username', this.username);
        Cookie.set('isLoggedIn', '1');
        window.location.reload();
        alert('LOGIN SUCCESSFUL');
        this.router.navigateByUrl('/dashboard');
      } else {
           this.isLoggedIn = false;
           alert('Invalid USERNAME/PASSWORD ');
       }
       });
     }

  }
}
