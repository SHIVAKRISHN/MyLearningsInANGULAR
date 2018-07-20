import { Component, OnInit } from '@angular/core';

import { AuthService} from './auth.service'
import { Router } from '@angular/router';
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
  }
  else
  {

  }
})
    console.log(event);
  }

}
