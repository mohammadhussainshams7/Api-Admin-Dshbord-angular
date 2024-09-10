import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbartop',
  templateUrl: './navbartop.component.html',
  styleUrls: ['./navbartop.component.css']
})
export class NavbartopComponent {
constructor(private _Router:Router){}
 

logout(){
  localStorage.removeItem("login")
  this._Router.navigateByUrl("login")
}
}
