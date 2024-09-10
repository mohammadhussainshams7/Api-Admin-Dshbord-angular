import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Blog } from '../models/blog';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BlogsService extends ApiService<Blog>{

  constructor(public override http:HttpClient, public Router:Router) {
    super(http, "http://127.0.0.1:3000/blogs", Router)
   }
}
