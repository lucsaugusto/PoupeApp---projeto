import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private nome: string = "";
  private sobrenome: string = "";
  private email: string = "";
  private tel: string = null;
  private cel: string = null;
  private senha: string = "";
  private senhaConf: string = "";

  private filtro: any = /^([a-zA-zà-úÀ-Ú]|\s+)+$/;
  private num: any = /^[0-9]+$/;
  private verfSenha: any = /^([@#$%&a-zA-zà-úÀ-Ú0-9])+$/;
  private verfCaractere: any = /[!@#$%^&*(),.?":{}|<>]/;

  private _msgErroNome: string = null;
  private _msgErroSobrenome: string = null;
  private _msgErroEmail: string = null;
  private _msgErroTel: string = null;
  private _msgErroCel: string = null;
  private _msgErroSenha: string = null;
  private _msgSenhaForte: string = null;
  private _msgSenhaFraca: string = null;
  private _msgConfirmaSenha: string = null;

  constructor() { }

  ngOnInit() {
  }

  verificarForca() {
    //alert("validou a senha / verificar força ");
    if (this.senha !== "") {
      this._msgErroSenha = "";
      if (!this.verfCaractere.test(this.senha)) {
        this._msgSenhaForte = "";
        this._msgSenhaFraca = `Senha Fraca`;
      }
      else {
        this._msgSenhaForte = `Senha Forte`;
        this._msgSenhaFraca = "";
      }
    }
    if (this.senha === "") {
      this._msgSenhaForte = "";
      this._msgSenhaFraca = "";
    }
  }

  validacao() {
    if (this.nome == "" || this.sobrenome == "" || this.email == "" || this.cel == null || this.tel == null || this.senha == "" || this.senhaConf == "") {
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
    if (this.cel.length < 11 || !this.num.test(this.cel)) {
      this.cel = null;
      this._msgErroCel = `Insira um número válido`;
    }
    else {
      this._msgErroCel = "";
    }

    if (this.tel.length < 10 || !this.num.test(this.tel)) {
      this.tel = null;
      this._msgErroTel = `Insira um número válido`;
    }
    else {
      this._msgErroTel = "";
    }

    if (this.senha.length < 10) {
      this.senha = "";
      this._msgErroSenha = `Senha inválida, digite uma senha com pelo menos 10 dígitos(Letras, Números e '@ # $ % &').`;
    }


    if (this.senha === this.senhaConf) {
      this._msgConfirmaSenha = "";
    }
    else if (this.senhaConf !== "") {
      this.senhaConf = "";
      this._msgConfirmaSenha = `Senhas diferentes, digite novamente`;
    }

    if (this.nome != "" && this.sobrenome != "" && this.email != "" && this.cel != null && this.tel != null && this.senha != "" && this.senhaConf != "") {
      alert("Dados enviados com SUCESSO!!");
      this.nome = "";
      this.sobrenome = "";
      this.email = "";
      this.cel = null;
      this.tel = null;
      this.senha = "";
      this.senhaConf = "";
      this._msgSenhaForte = "";
      this._msgSenhaFraca = "";
    }
  }
}
