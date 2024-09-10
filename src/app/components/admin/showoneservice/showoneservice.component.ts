import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services/services.service';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-showoneservice',
  templateUrl: './showoneservice.component.html',
  styleUrls: ['./showoneservice.component.css']
})
export class ShowoneserviceComponent {
  idPost!:string
  getallData!: any
  constructor(private _location: Location , private activeRouter:ActivatedRoute ,private ServicesService:ServicesService
    , private titleService:Title){
    this.idPost = this.activeRouter.snapshot.params?.['id']
  this.titleService.setTitle(" Service Id " + this.idPost);
    this.getAllDataById()
  }





  getAllDataById(){
    this.ServicesService.getPostById(this.idPost).subscribe(res=>this.getallData=res)
   }
  removeItem(id:any){
    this.ServicesService.deletePost(id).subscribe(data=>console.log(data))
    this._location.back();
  }
  backToShowAllData(){
    this._location.back();
  }
}
