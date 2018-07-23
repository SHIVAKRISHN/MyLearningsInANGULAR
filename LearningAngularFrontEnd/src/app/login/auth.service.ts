import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';


interface dataObj
{
  response : string;
}
interface stobj
{
  action: string;
  payload: any;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private store : Store<any>
              ) { }
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

  //redux

  getAllState()
  {
      return this.store.select('appReducer')
  }

  updateState(obj)
  {
this.store.dispatch(
  {
    type : obj.action,
    payload : obj.payload
  })
  }
}
