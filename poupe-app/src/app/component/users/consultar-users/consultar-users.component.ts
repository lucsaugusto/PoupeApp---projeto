import { Users } from 'src/app/model/users';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users/users.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-consultar-users',
  templateUrl: './consultar-users.component.html',
  styleUrls: ['./consultar-users.component.css']
})
export class ConsultarUsersComponent implements OnInit {
  username : string;
  public users: Users[];
  public user: Users;
  constructor(private usersService: UsersService, private router: Router, private loginService: LoginService) { }
  

  ngOnInit() {
    this.findAll();
    if (!localStorage.getItem("token")) {
      alert("Você não pode acessar está página sem estar logado")
      this.router.navigate(['/login']);
    }
    else {
      this.username = localStorage.getItem("nome");
      this.loginService.log.next(true);
    }
  }

  findAll(){
    this.usersService.getAll().subscribe((users: Users[])=>{
      this.users = users;
    }, err =>{
      console.log(`Erro cod: ${err.status}`);
    });
  }
}
