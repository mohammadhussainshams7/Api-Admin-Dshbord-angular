import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService  extends ApiService<Login>{
 
  constructor(public override http:HttpClient, public Router:Router) {
    super(http, "http://127.0.0.1:3000/login" , Router)
   }
}

