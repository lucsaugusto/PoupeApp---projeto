import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/model/login';
import { Users } from '../model/users';

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

  insert(user: Users){
    return this.http.post(`http://cloud.professorisidro.com.br:8088/usuario/new`, user);
  }

  update(user: Users){
    return this.http.put(`http://cloud.professorisidro.com.br:8088/usuario/`, user);
  }

}