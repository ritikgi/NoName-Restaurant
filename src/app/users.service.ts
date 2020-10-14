import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'http://localhost:3000/users';
  constructor(private http: HttpClient,private router:Router) { }

    
  register(firstName,lastName,email,password) {
    // console.log(password);
    // let length = password.lenght;
    // console.log(length);
      const obj = {firstName,lastName,email,password};
      this
          .http
          .post(`${this.url}/addRegister`, obj)
          .subscribe(res => console.log(res));
  }


  signIn(email,password){
    const obj = {email, password};
    console.log(obj);
    this
      .http
      .post(`${this.url}/signin`,obj)
      .subscribe((res:any) => {
        if(res.message){
          alert(res.message);
        }
        else{
          this.router.navigateByUrl('/hommihome');
          // this.router.navigateByUrl(`/dashboard/${res._id}`);
        }
      });
  }


}
