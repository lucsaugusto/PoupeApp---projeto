import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private nome: string;
  private sobrenome: string;
  private email: string;
  private tel: string;
  private msg: any;
  private filtro: any = /^([a-zA-zà-úÀ-Ú]|\s+)+$/;
  private num: any = /([0-9])/;
  private _msgErroN: string = null;
  private _msgErroS: string = null;
  private _msgErroE: string = null;
  private _msgErroT: string = null;

  constructor() { }

  ngOnInit() {
  }

  validacao() {
    if (this.nome == "" || this.sobrenome == "" || this.email == "" || this.tel == null || this.msg == "") {
      alert('Preencha todos os campos');
    }
    if (!this.filtro.test(this.nome)){
      this.nome = "";
      this._msgErroN = "Dado inválido";
    }
    else{
      this._msgErroN = null;
    }
    if (!this.filtro.test(this.sobrenome)) {
      this.sobrenome = "";
      this._msgErroS = "Dado inválido";
    }
    else{
      this._msgErroS = null;
    }
    
    if (this.email.indexOf("@") == -1 && this.email.indexOf("@") > 1 || this.email.indexOf(".") == -1) {
      this.email = "";
      this._msgErroE = "Dado inválido";
    }
    else{
      this._msgErroE = null;
    }
    
    if(!this.num.test(this.tel)){
      this.tel = null;
      this._msgErroT = `Apenas digitos`;
    }
    else{
      this._msgErroT = null;
    }
    if(this.tel.length < 11){
      this.tel = null;
      this._msgErroT = `Digite 11 digitos`;
    }
    else{
      this._msgErroT = null;
    }    
    if(this.nome != "" && this.sobrenome != "" && this.email != "" && this.tel != null && this.msg != "") {
      alert("Dados enviados com SUCESSO!!")
      this.nome = "";
      this.sobrenome = "";
      this.email = "";
      this.tel = null;
      this.msg = "";
    }
  }
}