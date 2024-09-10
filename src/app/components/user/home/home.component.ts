import { Component } from '@angular/core';
import { ServicesService } from '../../admin/services/services.service';
import { PortfolioService } from '../../admin/services/portfolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  _ServiceData:any
  _PortfolioData:any
  constructor(private _Service:ServicesService , private _PortfolioService:PortfolioService) {
    this.getServiceAlldata()
    this.getPortfolioAllData()
   }
   getServiceAlldata(){
    this._Service.getAllData().subscribe(data=>this._ServiceData = data)
   }
   getPortfolioAllData(){
    this._PortfolioService.getAllData().subscribe(data=>this._PortfolioData = data)
   }
} 
