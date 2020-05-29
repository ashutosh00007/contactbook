import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { WebrequestService } from '../webrequest.service';
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  userModel = new User('','sample@gmail','testpass');

 

  constructor(private _enrollmentservice:WebrequestService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this._enrollmentservice.enroll(this.userModel).subscribe(
      data=>{
        if(data==200)
        {
          console.log(data);
        }
        else{
          alert("Something went wrong");
        }
      },
      error=>console.log(error)
    );

  }

}
