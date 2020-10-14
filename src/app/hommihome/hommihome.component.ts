import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-hommihome',
  templateUrl: './hommihome.component.html',
  styleUrls: ['./hommihome.component.css']
})
export class HommihomeComponent implements OnInit {

  name:String
  constructor(private us:UsersService) {
 
  
   }

  ngOnInit() {

  }

  

}
