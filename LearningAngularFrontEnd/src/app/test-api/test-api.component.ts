import { Component, OnInit } from '@angular/core';
import { TestApiServiceService } from './test-api-service.service'
 
@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.css']
})
export class TestApiComponent implements OnInit {

  constructor(private apiServive : TestApiServiceService ) { }

  ngOnInit() {
    this.apiServive.getUsers().subscribe(data=>{})
   
  }



}
