import { Component } from '@angular/core';
import { Service } from '../models/service';
import { ServicesService } from '../services/services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent {
  idPost!:string
  massage!:string
  _Service = new Service()
  constructor(private _location:Location ,private _ServicesService:ServicesService, private activeRouter:ActivatedRoute , private titleService:Title){
    this.idPost = this.activeRouter.snapshot.params?.['id']
  this.titleService.setTitle(" Update Service Id " + this.idPost);
    this._ServicesService.getPostById(this.idPost).subscribe(data =>{
      this._Service = data
    })

  }


  saveData(){
    this._ServicesService.updatePost(this._Service).subscribe(data=>{
      this.massage = "Sucsses To Updated Data"
      this._location.back();
    })
  }

  
  backToShowAllData(){
    this._location.back();
  }
}
