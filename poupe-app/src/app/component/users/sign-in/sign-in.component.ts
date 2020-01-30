import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './../../../service/login.service';
import { Globals } from 'src/app/model/globals';
import { Users } from 'src/app/model/users';
import { ShareService } from 'src/app/service/share.service';
import { Token } from 'src/app/model/token';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [ Globals ]
})
export class SignInComponent implements OnInit {

  private login: Users = new Users();
  private _msgEnvioDados: string = null;
  private _msgErroEmail: string = null;
  private _msgCampoVazio: string = null;
  constructor(private router: Router, private route: ActivatedRoute, private loginService: LoginService) { }

  ngOnInit() {
  }

  fazerLogin() {
    if(this.login.email == "" || this.login.senha == "" || this.login.email == null || this.login.senha == null){
      this._msgCampoVazio = "Atenção! Preencha Todos os campos";
      this._msgErroEmail = "";
      this._msgEnvioDados = "";
    }
    else {
      this._msgCampoVazio = "";
      this.loginService.login(this.login).subscribe((res: Token) => {
        this._msgErroEmail = "";
        this._msgEnvioDados = "Sucesso! O usuário existe";
        this.login.email = "";
        this.login.senha = "";
        localStorage.setItem("token",res.token);
        localStorage.setItem("nome",res.nome);
        localStorage.setItem("email",res.email);
        this.loginService.log.next(true);
        this.router.navigate(['home']);
      },
        error => {
          this._msgErroEmail = "Falha! O usuário não existe";
          this._msgEnvioDados = "";
          this.login.email = "";
          this.login.senha = "";
          console.log(`Erro cod: ${error.status}`);
          this.router.navigate(['login']);
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
