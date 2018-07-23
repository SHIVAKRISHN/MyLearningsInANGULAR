import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  greetMessage="Hello Guest";
  
  constructor(private auth : AuthService) { }

  ngOnInit() {
    this.auth.getAllState().subscribe(state => {
      this.greetMessage = state.login  ? "Hello " + state.user : "Guest "
    })
  }

}
