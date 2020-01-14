import { UsersService } from './../../../service/users/users.service';
import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/model/users';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private user: Users = new Users();
  public users: Users[];
  private existe: boolean = false;

  private filtro: any = /^([a-zA-zà-úÀ-Ú]|\s+)+$/;
  private num: any = /^[0-9]+$/;
  private verfSenha: any = /^([@#$%&a-zA-zà-úÀ-Ú0-9])+$/;
  private verfCaractere: any = /([@#$%&])/;

  private _msgErroNome: string = null;
  private _msgErroSobrenome: string = null;
  private _msgErroEmail: string = null;
  private _msgErroTel: string = null;
  private _msgErroCel: string = null;
  private _msgErroSenha: string = null;
  private _msgSenhaForte: string = null;
  private _msgSenhaFraca: string = null;
  private _msgConfirmaSenha: string = null;
  private _msgExisteEmail: string = null;
  private _msgEnvioDados: string = null;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  verificarForca() {
    if (this.user.senha.length < 10 || !this.verfSenha.test(this.user.senha)) {
      this.user.senha = "";
      this.user.senhaConf = "";
      this._msgErroSenha = `Senha inválida, digite uma senha com pelo menos 10 dígitos(Letras, Números e '@ # $ % &').`;
      this._msgSenhaForte = "";
      this._msgSenhaFraca = "";
      this._msgConfirmaSenha = "";
    }
    else if (!this.verfCaractere.test(this.user.senha)) {
      this._msgErroSenha = "";
      this._msgSenhaForte = "";
      this._msgSenhaFraca = `Senha Fraca`;
    }
    else {
      this._msgErroSenha = "";
      this._msgSenhaForte = `Senha Forte`;
      this._msgSenhaFraca = "";
    }
  }

  validacao() {
    if (this.user.nome == "" || this.user.email == "" || this.user.telefone == null || this.user.senha == "" || this.user.senhaConf == "") {
      alert('Preencha todos os campos');
    }
    if (!this.filtro.test(this.user.nome) || this.user.nome.indexOf(" ") < 1) {
      this.user.nome = "";
      this._msgErroNome = `Dado inválido`;
    }
    else {
      this._msgErroNome = null;
    }

    if (this.user.email.indexOf("@") == -1 && this.user.email.indexOf("@") > 1 || this.user.email.indexOf(".") == -1) {
      this.user.email = "";
      this._msgErroEmail = `Dado inválido`;
    }
    else {
      this._msgErroEmail = null;
    }

    if (this.user.telefone.length < 10 || !this.num.test(this.user.telefone)) {
      this.user.telefone = null;
      this._msgErroTel = `Insira um número válido`;
    }
    else {
      this._msgErroTel = "";
    }

    if (this.user.senha === this.user.senhaConf) {
      this._msgConfirmaSenha = "";
    }
    else if (this.user.senhaConf !== "") {
      this.user.senhaConf = "";
      this._msgConfirmaSenha = `Senhas diferentes, digite novamente`;
    }

    if (this.user.nome != "" && this.user.email != "" && this.user.telefone != null && this.user.senha != "" && this.user.senhaConf != "") {
      this.verificaEmail();
      if (!this.existe) {
        this.usersService.insert(this.user).subscribe(response => {
          this._msgEnvioDados = "Dados enviados com sucesso!";
          this.user.nome = "";
          this.user.email = "";
          this.user.telefone = null;
          this.user.senha = "";
          this.user.senhaConf = "";
          this._msgSenhaForte = "";
          this._msgSenhaFraca = "";
          this._msgErroEmail = "";
          this.existe = false;
        },
          error => {
            console.log(`Erro cod: ${error.status}`);
          })
      }
      else
        this._msgErroEmail = `O email já existe`;
    }
  }

  verificaEmail() {
    this.usersService.getAll().subscribe((lista: Users[]) => {
      this.users = lista;
    }, error => {
      console.log(`Erro cod: ${error.status}`);
    });

    this.users.forEach(element => {
      this.usersService.getById(element.idUsuario).subscribe();
      if (this.user.email === element.email) {
        this.existe = true;
      }
    });
  }
}
