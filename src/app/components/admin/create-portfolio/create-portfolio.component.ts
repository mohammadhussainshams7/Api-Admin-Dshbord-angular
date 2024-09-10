import { Component } from '@angular/core';
import { BlogsService } from '../services/blogs.service';
import { Router } from '@angular/router';
import { Blog } from '../models/blog';
import { PortfolioService } from '../services/portfolio.service';
import { Portfolio } from '../models/portfolio';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-portfolio',
  templateUrl: './create-portfolio.component.html',
  styleUrls: ['./create-portfolio.component.css']
})
export class CreatePortfolioComponent {
  massage=""
  protected Portfolio = new Portfolio();
    constructor(private PortfolioService:PortfolioService
       ,private _Router:Router, private titleService:Title){
        this.titleService.setTitle("Create Portfolio");
    }
    print(ngForm:any){
      console.log(ngForm)
    }
    saveData(){
      this.PortfolioService.createPost(this.Portfolio).subscribe(data=>{
        this.massage = "Sucsses To Create Data"
        this._Router.navigateByUrl("/admin")
      })
    }
}
