import { Globals } from './../../model/globals';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Users } from 'src/app/model/users';
import * as $ from 'jquery';


@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  providers: [Globals]
})
export class TitleComponent implements OnInit {

  constructor(private loginService : LoginService) { }
  username: string;
  user: Users;
  log: boolean; // recebe o valor do log do login service,  sendo utilizado pelo button do menu component

  ngOnInit() {
    this.loginService.loginInfo(localStorage.getItem("token")).subscribe(
      (res: Users) => {
        Globals.user = res;
        this.user = res;
        this.username = this.user.nome.split(' ')[0];
      },
      (err) => {
        this.user = null;
      }
    );
  }

  logout(){
    this.loginService.log.next(false);
    localStorage.clear();

    $('#logout').click();

    this.user = null;
  }

  

}
