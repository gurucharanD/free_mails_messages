
import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  sendMessage(newMessage) {
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    return this.http.post('http://localhost:3000/api/sendmessage', newMessage, {headers: headers})
    .map(res => res.json())
    .do(data => console.log(data));
    // .catch(this.handleError);

  }

  sendEmail(newEmail)  {
      const headers = new Headers();
      headers.append('content-type', 'application/json');
      return this.http.post('http://localhost:3000/api/sendemail', newEmail, {headers: headers})
      .map(res => res.json())
      .do(data => console.log(data));
      // .catch(this.handleError);
    }

}

