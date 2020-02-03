import { Injectable } from '@angular/core/';
import { HttpClient } from '@angular/common/http';
import { Users } from 'src/app/model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`http://localhost:8080/usuario`);
  }

  getById(id: number){
    return this.http.get(`http://localhost:8080/usuario/${id}`);
  }

  insert(user: Users){
    return this.http.post(`http://localhost:8080/usuario`, user);
  }

  update(user: Users){
    return this.http.put(`http://localhost:8080/usuario`, user);
  }

  delete(id: number){
    return this.http.delete(`http://localhost:8080/usuario/${id}`);
  }
}
