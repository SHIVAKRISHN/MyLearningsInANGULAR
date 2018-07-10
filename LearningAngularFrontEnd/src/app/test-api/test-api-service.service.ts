import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TestApiServiceService {

  constructor( private _http : HttpClient ) { }

getUsers()
{
  return this._http.get("/api/getUsers")
}

}
