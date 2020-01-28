import { Injectable } from '@angular/core/';
import { HttpClient } from '@angular/common/http';
import { Users } from 'src/app/model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  login(user: Users) {
    throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`http://localhost:8080/usuario/all`);
  }

  getById(id: number){
    return this.http.get(`http://localhost:8080/usuario/${id}`);
  }

  insert(user: Users){
    return this.http.post(`http://localhost:8080/usuario/insert`, user);
  }

  update(user: Users){
    return this.http.put(`http://localhost:8080/usuario/update`, user);
  }

  delete(id: number){
    return this.http.delete(`http://localhost:8080/usuario/delete/${id}`);
  }
}
