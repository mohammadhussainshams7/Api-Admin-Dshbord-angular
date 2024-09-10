import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioService } from '../services/portfolio.service';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-showoneportfolio',
  templateUrl: './showoneportfolio.component.html',
  styleUrls: ['./showoneportfolio.component.css']
})
export class ShowoneportfolioComponent {
  idPost!:string
  getallData!: any
  constructor(private _location: Location , private activeRouter:ActivatedRoute ,private _PortfolioService:PortfolioService
    , private titleService:Title){
      this.idPost = this.activeRouter.snapshot.params?.['id']
    this.titleService.setTitle(" Portifolio Id " + this.idPost);
    this.getAllDataById()
  }





  getAllDataById(){
    this._PortfolioService.getPostById(this.idPost).subscribe(res=>this.getallData=res)
   }
  removeItem(id:any){
    this._PortfolioService.deletePost(id).subscribe(data=>console.log(data))
    this._location.back();
  }
  backToShowAllData(){
    this._location.back();
  }
}
