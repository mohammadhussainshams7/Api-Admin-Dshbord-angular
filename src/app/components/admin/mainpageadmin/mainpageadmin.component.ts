import { Component, HostListener } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-mainpageadmin',
  templateUrl: './mainpageadmin.component.html',
  styleUrls: ['./mainpageadmin.component.css']
})
export class MainpageadminComponent { 
  getWidthScreen!:number
  tooglebtn=true
  constructor(private loginChick:LoginService) {
    this.loginChick.auth();    
    this.getWidthScreen = window.innerWidth;  
  }

  toogleslider(){
    this.tooglebtn = !this.tooglebtn
  }

  @HostListener('window:resize', ['$event'])  
  onResize() {  
    this.getWidthScreen = window.innerWidth;  
  }  
}
