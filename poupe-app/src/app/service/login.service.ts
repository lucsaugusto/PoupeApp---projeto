import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public log: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  login(login: Users){
    return this.http.post(`http://localhost:8080/usuario/login`, login);
  }

  loginInfo(token: string){
    return this.http.get(`http://localhost:8080/usuario/info?token=`+ token);
  }
}
