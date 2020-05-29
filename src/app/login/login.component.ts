import { Component, OnInit } from '@angular/core';
import { Loginclass } from '../loginclass';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginModel = new Loginclass('sample@gmail.com','testpass');

  constructor() { }

  ngOnInit(): void {
  }

}
