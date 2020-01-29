import { Globals } from './../../model/globals';
import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/service/share.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  providers: [Globals]
})
export class TitleComponent implements OnInit {

  constructor(private loginService : LoginService) { }

  log: boolean; 

  ngOnInit() {
    this.loginService.log.subscribe( value => {
      this.log = value;
    });
  }

  logout(){
    this.loginService.log.next(false);
    Globals.nome = undefined;
    localStorage.removeItem("token");
  }

  

}
