import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '../models/service';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicesService extends  ApiService<Service>{

  constructor(public override http:HttpClient, public Router:Router) {
    super(http, "http://127.0.0.1:3000/service" , Router)
   }
}
