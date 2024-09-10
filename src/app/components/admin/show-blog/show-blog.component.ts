import { Component } from '@angular/core';
import { BlogsService } from '../services/blogs.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-show-blog',
  templateUrl: './show-blog.component.html',
  styleUrls: ['./show-blog.component.css']
})
export class ShowBlogComponent {
  allData !:any
  constructor(private _BlogsService:BlogsService, private titleService:Title){
    this.titleService.setTitle("Show Blog");
    this.getAllData()
   }
   getAllData(){
    this._BlogsService.getAllData().subscribe(data=>this.allData = data)
   }
   removeItem(id:any){
    this._BlogsService.deletePost(id).subscribe(data=>console.log(data))
    this.getAllData() 
  }
}
