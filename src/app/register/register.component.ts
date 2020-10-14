import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName:String;
  lastName:String;
  email:String;
  password:String

  constructor(private us:UsersService,private router:Router) { }

  ngOnInit() {
  }
addData(){

  this.us.register(this.firstName,this.lastName,this.email,this.password);
    alert('Registeration Complete');
    this.router.navigateByUrl('/login');
  
  // alert(this.password.lenght);
  // console.log(this.name)
}


}
