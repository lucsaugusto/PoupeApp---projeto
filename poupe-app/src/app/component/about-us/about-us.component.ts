import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/model/globals';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  providers: [Globals]
})
export class AboutUsComponent implements OnInit {
  user: string;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    if (!localStorage.getItem("token")) {
      alert("Você não pode acessar está página sem estar logado")
      this.router.navigate(['/login']);
    }
    else {
      Globals.nome = localStorage.getItem("nome");
      this.user = Globals.nome;
      this.loginService.log.next(true);
    }
  }

}
