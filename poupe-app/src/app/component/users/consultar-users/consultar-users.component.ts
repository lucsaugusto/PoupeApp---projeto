import { Users } from 'src/app/model/users';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users/users.service';

@Component({
  selector: 'app-consultar-users',
  templateUrl: './consultar-users.component.html',
  styleUrls: ['./consultar-users.component.css']
})
export class ConsultarUsersComponent implements OnInit {
  public users: Users[];
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.usersService.getAll().subscribe((users: Users[])=>{
      this.users = users;
    }, err =>{
      console.log(`Erro cod: ${err.status}`);
    });
  }
}
