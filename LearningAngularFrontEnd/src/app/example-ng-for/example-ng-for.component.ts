import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-ng-for',
  templateUrl: './example-ng-for.component.html',
  styleUrls: ['./example-ng-for.component.css']
})
export class ExampleNgForComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   let customVar : true;
  }

  records = [
    {
      "name" : "shiva",
      "onlineStatus" : true

    },
    {
      "name" : "abc",
      "onlineStatus" : false
    },
    {
      "name" : "xyz",
      "onlineStatus" : true
    }

  ]

  

}
