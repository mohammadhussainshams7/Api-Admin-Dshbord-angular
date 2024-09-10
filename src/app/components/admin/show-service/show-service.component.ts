import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-show-service',
  templateUrl: './show-service.component.html',
  styleUrls: ['./show-service.component.css']
})
export class ShowServiceComponent {

  allData:any
  constructor(private _Service:ServicesService, private titleService:Title){
    this.titleService.setTitle("Show Service");
    this.getAllData()
   }
   getAllData(){
    this._Service.getAllData().subscribe(data=>this.allData = data)
   }
   removeItem(id:any){
    this._Service.deletePost(id).subscribe(data=>console.log(data))
    this.getAllData() 
  }
}
