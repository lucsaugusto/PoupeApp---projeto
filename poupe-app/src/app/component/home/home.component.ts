import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { Globals } from 'src/app/model/globals';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Globals]
})
export class HomeComponent implements OnInit {
  username: string;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    if (!localStorage.getItem("token")) {
      alert("Você não pode acessar está página sem estar logado")
      this.router.navigate(['/login']);
    }
    else {
      this.username = Globals.user.nome;
      this.loginService.log.next(true);
    }
  }
}
