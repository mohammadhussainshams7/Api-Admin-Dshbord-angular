import { Component } from '@angular/core';
import { Login } from '../models/login';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  _login = new Login()
  massage!:string
  constructor(private _loginServer:LoginService,private _Router:Router, private titleService:Title){
    this.titleService.setTitle("Login");
  }

  login(){

    this._loginServer.getAllData().subscribe((data:any)=>{
      let user = data.find((userData:any) =>{
        return userData.email ==this._login.email && userData.pass ==this._login.pass
      })
    if(!user){

      this.massage = "The Email or Password Is Invalid"
    }else{
      localStorage.setItem("login" , JSON.stringify(user))
      this._Router.navigateByUrl("admin")
    }
    })
  }
}
