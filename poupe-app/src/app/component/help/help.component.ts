import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  private nome: string;
  private email: string;
  private tel: string;
  private msg: any;
  private filtro: any = /^([a-zA-zà-úÀ-Ú]|\s+)+$/;
  private num: any = /^[0-9]+$/;
  private _msgErroN: string = null;
  private _msgErroS: string = null;
  private _msgErroE: string = null;
  private _msgErroT: string = null;
  private _msgEnvioDados: string;
  private _msgCampoVazio: string;

  username: string;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    if (localStorage.getItem("token")) {
      this.username = localStorage.getItem("nome");
      this.loginService.log.next(true);
      window.scrollTo(0, 0);
    }
    
  }
  validacao() {
    if (this.nome == "" || this.email == "" || this.tel == null || this.msg == "") {
      this._msgCampoVazio = "Atenção! Preencha Todos os campos";
      this._msgEnvioDados = "";
    }
    if (!this.filtro.test(this.nome) || this.nome.indexOf(" ") < 1){
      this.nome = "";
      this._msgErroN = "Dado inválido";
    }
    else{
      this._msgErroN = null;
    }
    
    if (this.email.indexOf("@") == -1 && this.email.indexOf("@") > 1 || this.email.indexOf(".") == -1) {
      this.email = "";
      this._msgErroE = "Dado inválido";
    }
    else{
      this._msgErroE = null;
    }
    
    if(this.nome != "" && this.email != "" && this.tel != null && this.msg != "") {
      this._msgEnvioDados = "Dados enviados com sucesso!";
      this.nome = "";
      this.email = "";
      this.tel = null;
      this.msg = "";
    }
  }

  limpar() {
    if (this._msgErroE != "" || this._msgEnvioDados != "" || this._msgCampoVazio != "") {
      this.nome = "";
      this.email = "";
      this._msgErroE = "";
      this._msgErroN = "";
      this._msgCampoVazio = "";
      this._msgEnvioDados = "";
    }
  }
}