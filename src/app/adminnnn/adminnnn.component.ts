import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-adminnnn',
  templateUrl: './adminnnn.component.html',
  styleUrls: ['./adminnnn.component.css']
})
export class AdminnnnComponent implements OnInit {
  // name;
  // email;
  // password;
  // address;
  // city;


  constructor(private us:UsersService) { }

  ngOnInit() {
  }
  // }
  // addData(){
  //   this.us.addData(this.name,this.address,this.city,this.email);
  // }
  // employees:any[]=[
    // {
    //   "fname":"ritik",
    //   "lname":"gupta",
    //   "age":19
    // },
    // {
    //   "fname":"sukanya",
    //   "lname":"verma",
    //   "age":19
    // },
    // {
    //   "fname":"ritik",
    //   "lname":"gupta",
    //   "age":19
    // },


  

}
