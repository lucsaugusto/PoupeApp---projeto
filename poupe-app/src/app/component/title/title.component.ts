import { Globals } from './../../model/globals';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor(private loginService : LoginService) { }

  username: string;
  log: boolean; // recebe o valor do log do login service,  sendo utilizado pelo button do menu component

  ngOnInit() {
    this.loginService.log.subscribe( value => {
      this.log = value;
      this.username = localStorage.getItem("nome");
    });
    
  }

  logout(){
    this.loginService.log.next(false);
    localStorage.clear();
  }

  

}
