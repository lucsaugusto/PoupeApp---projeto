import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { Globals } from 'src/app/model/globals';
import { Users } from 'src/app/model/users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Globals]
})
export class HomeComponent implements OnInit {
  user: Users;
  username: string;
  atualizado: boolean = true;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    if(!localStorage.getItem("logado")){
      this.router.navigate(['login']);
    }
    // else {
    //   this.username = Globals.user.nome;
    //   alert("nome: " + Globals.user.nome)
    // }
  }
}
