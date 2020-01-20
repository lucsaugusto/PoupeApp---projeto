import { Users } from 'src/app/model/users';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users/users.service';
import { Globals } from 'src/app/model/globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-users',
  templateUrl: './consultar-users.component.html',
  styleUrls: ['./consultar-users.component.css'],
  providers: [Globals]
})
export class ConsultarUsersComponent implements OnInit {
  public users: Users[];
  public user: Users;
  constructor(private usersService: UsersService, private router: Router) { }
  

  ngOnInit() {
    this.findAll();
    if (Globals.user === undefined) {
      this.router.navigate(['login']);
    }
    else {
      this.user = Globals.user;
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
