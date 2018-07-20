import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'


interface dataObj
{
  response : string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  validateUser(username,password)
  {
    console.log("username ",username);
    var obje=  {
      'username':username,
      'password' :password
    }
    return this.http.post<dataObj>('/api/loginCheck',obje)
  }

}
