import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Login } from 'src/app/model/login';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private http: HttpClient) { }
  
  getAll(){
    return this.http.get("http://cloud.professorisidro.com.br:8088/usuario/all");
  }

  getById(idUsuario: number){
    return this.http.get(`http://cloud.professorisidro.com.br:8088/usuario/${idUsuario}`);
  }

  insert(user: User){
    return this.http.post(`http://cloud.professorisidro.com.br:8088/usuario/new`, user);
  }

  update(user: User){
    return this.http.put(`http://cloud.professorisidro.com.br:8088/usuario/`, user);
  }

}