import { Injectable } from '@angular/core/';
import { HttpClient } from '@angular/common/http';
import { Users } from 'src/app/model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`http://cloud.professorisidro.com.br:8088/usuario/all`);
  }

  getById(id: number){
    return this.http.get(`http://cloud.professorisidro.com.br:8088/usuario/${id}`);
  }

  insert(user: Users){
    return this.http.post(`http://cloud.professorisidro.com.br:8088/usuario/new`, user);
  }

  update(user: Users){
    return this.http.put(`http://cloud.professorisidro.com.br:8088/usuario`, user);
  }

  delete(id: number){
    return this.http.delete(`http://cloud.professorisidro.com.br:8088/usuario/${id}`);
  }
}
