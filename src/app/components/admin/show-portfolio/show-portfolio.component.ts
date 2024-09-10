import { Component } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-show-portfolio',
  templateUrl: './show-portfolio.component.html',
  styleUrls: ['./show-portfolio.component.css']
})
export class ShowPortfolioComponent {

  allData:any
  constructor(private _PortfolioService:PortfolioService, private titleService:Title){
    this.titleService.setTitle("Show Portfolio");
    this.getAllData()
   }
   getAllData(){
    this._PortfolioService.getAllData().subscribe(data=>this.allData = data)
   }
   removeItem(id:any){
    this._PortfolioService.deletePost(id).subscribe(data=>console.log(data))
    this.getAllData()  
  }
}
