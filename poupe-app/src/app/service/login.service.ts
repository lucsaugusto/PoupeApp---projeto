import { Injectable } from '@angular/core';
import { Login } from '../model/login';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(login: Login){
    return this.http.post(`http://cloud.professorisidro.com.br:8088/usuario/login`, login);
  }
}
