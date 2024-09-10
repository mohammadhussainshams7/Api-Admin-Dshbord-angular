import { Component } from '@angular/core';
import { Portfolio } from '../models/portfolio';
import { PortfolioService } from '../services/portfolio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-update-portfolio',
  templateUrl: './update-portfolio.component.html',
  styleUrls: ['./update-portfolio.component.css']
})
export class UpdatePortfolioComponent {
  idPost!:string
  massage!:string
  _Portfolio = new Portfolio()
  constructor(private _location:Location ,private PortfolioService:PortfolioService, private activeRouter:ActivatedRoute , private titleService:Title){
    this.idPost = this.activeRouter.snapshot.params?.['id']
  this.titleService.setTitle(" Update Portfolio Id " + this.idPost);
    this.PortfolioService.getPostById(this.idPost).subscribe(data =>{
      this._Portfolio = data
    })

  }


  saveData(){
    this.PortfolioService.updatePost(this._Portfolio).subscribe(data=>{
      this.massage = "Sucsses To Updated Data"
      this._location.back(); 
    })
  }

  
  backToShowAllData(){
    this._location.back();
  }
}
