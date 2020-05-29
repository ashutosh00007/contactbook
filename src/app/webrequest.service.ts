import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class WebrequestService {

  _url="http://localhost:3000/user";

  constructor(private http: HttpClient) { }

  enroll(user:User)
  {
   return this.http.post<any>(this._url,user);
  }
}
