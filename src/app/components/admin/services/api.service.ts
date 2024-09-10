import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



export class ApiService <t> {

  constructor( protected http: HttpClient , @Inject(String)public baseUrl:string , protected _Router:Router) {

   }
   getAllData():Observable<t>{
    return this.http.get<t>(this.baseUrl)
   }
   getPostById(id:string):Observable<t>{
    return this.http.get<t>(`${this.baseUrl}/${id}`)
  }
  createPost(data:any):Observable<t>{
    return this.http.post<t>(this.baseUrl,data)
  }
  updatePost(post:any):Observable<t>{
    return this.http.put<t>(`${this.baseUrl}/${post.id}`,post)
  }
  deletePost(id:string):Observable<t>{
    return this.http.delete<t>(`${this.baseUrl}/${id}`)
  }
  auth(){
    if (!localStorage.getItem("login")) {
      this._Router.navigateByUrl("login")
    } else {
      
    }
  }
}
