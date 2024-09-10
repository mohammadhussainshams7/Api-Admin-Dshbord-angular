import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BlogsService } from '../services/blogs.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-showoneblog',
  templateUrl: './showoneblog.component.html',
  styleUrls: ['./showoneblog.component.css']
})
export class ShowoneblogComponent {  
  idPost!:string
  getallData!: any
  constructor(private _location: Location , private activeRouter:ActivatedRoute ,private _BlogsService:BlogsService
    , private titleService:Title){
      this.idPost = this.activeRouter.snapshot.params?.['id']
    this.titleService.setTitle(" blog Id " + this.idPost);
    this.getAllDataById()
  }





  getAllDataById(){
    this._BlogsService.getPostById(this.idPost).subscribe(res=>this.getallData=res)
    

  }
  removeItem(id:any){
    this._BlogsService.deletePost(id).subscribe(data=>console.log(data))
    this._location.back();
  }
  backToShowAllData(){
    this._location.back();
  }
}
