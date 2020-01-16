import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/model/login';
import { LoginService } from './../../../service/login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  private login: Login = new Login();
  private _msgEnvioDados: string = null;
  private _msgErroEmail: string = null;
  private _msgCampoVazio: string = null;
  constructor(private router: Router, private route: ActivatedRoute, private loginService: LoginService) { }

  ngOnInit() {
  }

  fazerLogin() {
    if(this.login.email == "" || this.login.senha == ""){
      this._msgCampoVazio = "Atenção! Preencha Todos os campos";
      this._msgErroEmail = "";
      this._msgEnvioDados = "";
    }
    else {
      this._msgCampoVazio = "";
      this.loginService.login(this.login).subscribe((login: Login) => {
        this._msgErroEmail = "";
        this._msgEnvioDados = "Sucesso! O usuário existe";
        this.login.email = "";
        this.login.senha = "";
        console.log(`Ok`);

      },
        error => {
          this._msgErroEmail = "Falha! O usuário não existe";
          this._msgEnvioDados = "";
          this.login.email = "";
          this.login.senha = "";
          console.log(`Erro cod: ${error.status}`);
        });
    }
  }

  limpar() {
    if (this._msgErroEmail != "" || this._msgEnvioDados != "" || this._msgCampoVazio != "") {
      this.login.email = "";
      this.login.senha = "";
      this._msgCampoVazio = "";
      this._msgErroEmail = "";
      this._msgEnvioDados = "";
    }
  }
}
