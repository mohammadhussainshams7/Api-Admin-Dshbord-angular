import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-navbar',
  templateUrl: './modal-navbar.component.html',
  styleUrls: ['./modal-navbar.component.css']
})
export class ModalNavbarComponent {

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