import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent {
  picUrl !:string  
  constructor( ){
     let  id:string | null =  localStorage.getItem("login")
     if(id){
      this.picUrl = JSON.parse(id).pic
     }else{
      this.picUrl = "https://static-00.iconduck.com/assets.00/person-icon-1901x2048-a9h70k71.png"
     }
  }


}
