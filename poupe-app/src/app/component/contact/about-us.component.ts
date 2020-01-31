import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  user: string;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    if (localStorage.getItem("token")) {
      this.user = localStorage.getItem("nome");
      this.loginService.log.next(true);
      window.scrollTo(0, 0);
    }
  }
}
