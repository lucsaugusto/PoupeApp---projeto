import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/model/users';
import { Router } from '@angular/router';
import { Token } from 'src/app/model/Token';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: string;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    if (!localStorage.getItem("token")) {
      alert("Você não pode acessar está página sem estar logado")
      this.router.navigate(['/login']);
    }
    else {
      this.user = localStorage.getItem("nome");
      this.loginService.log.next(true);
    }
  }
}
