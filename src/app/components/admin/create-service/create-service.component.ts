import { Component } from '@angular/core';
import {Service} from '../models/service'
import { ServicesService } from '../services/services.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
}) 
export class CreateServiceComponent {

  massage=""
  protected objServ = new Service();
    constructor(private _ServicesServ:ServicesService
       ,private _Router:Router, private titleService:Title){
        this.titleService.setTitle("Create Service");
    }
   
    saveData(){
      this._ServicesServ.createPost(this.objServ).subscribe(data=>{
        this.massage = "Sucsses To Create Data"
        this._Router.navigateByUrl("/admin")
      })
    }

}
