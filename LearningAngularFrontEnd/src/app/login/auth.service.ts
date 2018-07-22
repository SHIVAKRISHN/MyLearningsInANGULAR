import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


interface dataObj
{
  response : string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
// For localstorage comment
  //private isLogggedinStatus=JSON.parse(localStorage.getItem("isLoggedIn") || 'false');

  private isLogggedinStatus=false;

  setLoggedInStatus(status : boolean)
{
  this.isLogggedinStatus=status;
}

get isLoggedIn()
{
  //for localstorage comment
     //return JSON.parse(localStorage.getItem("isLoggedIn") || this.isLogggedinStatus);

     return  this.isLogggedinStatus;
}
  validateUser(username,password)
  {
    console.log("username ",username);
    var obje=  {
      'username':username,
      'password' :password
    }
    return this.http.post<dataObj>('/api/loginCheck',obje)
  }

  checkAuthentation()
  {
    return this.http.get<dataObj>('/api/authCheck');
  }

}
