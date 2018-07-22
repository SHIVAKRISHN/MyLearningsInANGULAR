import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './login/auth.service';

import { map  } from 'rxjs/operators'


interface dataObj
{
  response : string;
}

@Injectable({
  providedIn: 'root'
})
export class GuardAuthGuard implements CanActivate {

  constructor(private auth : AuthService, private router : Router)
  {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.auth.isLoggedIn)
      {
        //this.router.navigate(['/login']);
        return true;
      }
      else
      {
          this.auth.checkAuthentation().subscribe(data => {
            console.log("the respnse from server is "+ data);
            if(data.response === "Authorized")
              return true;
          })

          //this.router.navigate(['/login']);
          return ! this.auth.isLoggedIn;
      }
     
  }
}
