import { Component } from '@angular/core';
import { Blog } from '../models/blog';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { BlogsService } from '../services/blogs.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent {
  /* This Massage To Show Any Error To user */
  massage=""
  /* Get Object From Blog Moudel */
  objBlog = new Blog();
    constructor(private _BlogsService:BlogsService ,private _Router:Router , 
      private titleService:Title){
        this.titleService.setTitle("Create Blog");

    }
    saveData(){
      this._BlogsService.createPost(this.objBlog).subscribe(data=>{
        console.log(data)
        this.massage = "Sucsses To Create Data"
        this._Router.navigateByUrl("/admin")
      })
    }
}
