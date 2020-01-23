import { Posts } from './../model/posts';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  constructor(private http: HttpClient) { }
  
  getAll(){
    return this.http.get("localhost:8080/postagem/all");
  }

  getById(idPostagem: number){
    return this.http.get(`localhost:8080/postagem/${idPostagem}`);
  }

  insert(post: Posts){
    return this.http.post("localhost:8080/postagem/insert", post);
  }

  update(post: Posts){
    return this.http.put("localhost:8080/postagem/update", post);
  }
}