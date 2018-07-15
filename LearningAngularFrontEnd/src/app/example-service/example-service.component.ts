import { Component, OnInit } from '@angular/core';
import { TestService } from "./test.service"

@Component({
  selector: 'app-example-service',
  templateUrl: './example-service.component.html',
  styleUrls: ['./example-service.component.css']
})
export class ExampleServiceComponent implements OnInit {

  constructor( private mytestService : TestService ) { }

   public records =[]
  ngOnInit() {

  this.records= this.mytestService.getRecords();
  }

}
