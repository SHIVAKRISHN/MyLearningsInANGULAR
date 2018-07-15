import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  getRecords()
  {
    return  [
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
  
    ];
  }
}
