import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private nome: string;
  private sobrenome: string;
  private email: string;
  private tel: string;
  private senha: string;
  private senhaConf: string;
  private filtro: any = /^([a-zA-zà-úÀ-Ú]|\s+)+$/;
  private num: any = /^[0-9]+$/;
  private verfSenha: any = /^([@#$%&a-zA-zà-úÀ-Ú])+$/;
  private verfCaractere: any = /^([@#$%&])+$/;
  private _msgErroNome: string = null;
  private _msgErroSobrenome: string = null;
  private _msgErroEmail: string = null;
  private _msgErroTel: string = null;
  private _msgErroSenha: string = null;
  private _msgForcaSenha: string = null;
  private _msgConfirmaSenha: string = null;

  constructor() { }

  ngOnInit() {
  }

  validacao() {
    if (this.nome == "" || this.sobrenome == "" || this.email == "" || this.tel == null || this.senha == "" || this.senhaConf == "") {
      alert('Preencha todos os campos');
    }
    if (!this.filtro.test(this.nome)) {
      this.nome = "";
      this._msgErroNome = `Dado inválido`;
    }
    else {
      this._msgErroNome = null;
    }
    if (!this.filtro.test(this.sobrenome)) {
      this.sobrenome = "";
      this._msgErroSobrenome = `Dado inválido`;
    }
    else {
      this._msgErroSobrenome = null;
    }

    if (this.email.indexOf("@") == -1 && this.email.indexOf("@") > 1 || this.email.indexOf(".") == -1) {
      this.email = "";
      this._msgErroEmail = `Dado inválido`;
    }
    else {
      this._msgErroEmail = null;
    }

    if (!this.num.test(this.tel)) {
      this.tel = null;
      this._msgErroTel = `Apenas digitos`;
    }
    else {
      this._msgErroTel = null;
    }
    if (this.tel.length < 10 || this.tel.length > 11) {
      this.tel = null;
      this._msgErroTel = `Insira um número válido`;
    }
    else {
      this._msgErroTel = null;
    }

    if (this.senha.length < 10 || !this.verfSenha.test(this.senha)) {
      this.senha = null;
      this._msgErroSenha = `Senha inválida, digite uma senha com pelo menos 10 dígitos(Letras, Números e '@ # $ % &').`;
    }
    if (!this.verfCaractere.test(this.senha)) {
      this._msgForcaSenha = `\nSenha Fraca`;
    }
    else {
      this._msgForcaSenha = `\nSenha Forte`;
    }

    if(this.senha != this.senhaConf){
      this._msgConfirmaSenha = `Senhas diferentes, digite novamente`;
    }
    else {
      this._msgConfirmaSenha = "";
    }

    if (this.nome != "" && this.sobrenome != "" && this.email != "" && this.tel != null && this.senha != "" || this.senhaConf != "") {
      alert("Dados enviados com SUCESSO!!");
      this.nome = "";
      this.sobrenome = "";
      this.email = "";
      this.tel = null;
    }
  }
}
