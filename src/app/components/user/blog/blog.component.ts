import { Component } from '@angular/core';
import { BlogsService } from '../../admin/services/blogs.service';
import { Blog } from '../../admin/models/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  allData :any
  constructor(private _BlogsService:BlogsService) {
    this.getAllData()
   }
   getAllData(){
    this._BlogsService.getAllData().subscribe(data=>this.allData=data )
    
  }
}
