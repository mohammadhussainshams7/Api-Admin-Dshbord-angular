import { Component } from '@angular/core';
import { BlogsService } from '../services/blogs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../models/blog';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent {
  idPost!:string
    massage!:string
    getData = new Blog()
    constructor(private _location: Location ,private _BlogsService:BlogsService, private activeRouter:ActivatedRoute , private titleService:Title){
      this.idPost = this.activeRouter.snapshot.params?.['id']
    this.titleService.setTitle(" Update blog Id " + this.idPost);
      this._BlogsService.getPostById(this.idPost).subscribe(data =>
        this.getData = data
   )
        
    }


    saveData(){
      console.log(this.getData)
      this._BlogsService.updatePost(this.getData).subscribe(data=>{
        this.massage = "Sucsses To Updated Data"
        this._location.back();
      })
    } 

    backToShowAllData(){
      this._location.back();
    }
}


