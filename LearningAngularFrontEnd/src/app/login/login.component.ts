import { Component, OnInit } from '@angular/core';

import { AuthService} from './auth.service'
import { Router } from '@angular/router';
import { ACTION_LOGIN } from '../store/actions/appActions';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService,
              private router : Router
  ) { }

  ngOnInit() {
  }


  loginCheck(event)
  {
    event.preventDefault();
    const target = event.target;
    const userName = target.querySelector("#username").value;
    const password = target.querySelector("#password").value;
    console.log(userName);
    console.log(password);
this.authService.validateUser(userName,password).subscribe(data => {
  console.log(data," Response from the server");
  if(data.response == "Valid User")
  {
   this.router.navigate(["/admin"]) 
   this.authService.setLoggedInStatus(true);
    this.authService.updateState({
      action : ACTION_LOGIN,
      payload : userName
    })

   // for localstorage comment
      //localStorage.setItem("isLoggedIn","true");
 
 
 
    
   // this.authService.isLogggedinStatus=true;
  }
  else
  {
    this.authService.setLoggedInStatus(false);
    //for localstorage comment
        //localStorage.removeItem("isLoggedIn");
  }
})
    console.log(event);
  }

}
