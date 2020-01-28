import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/model/globals';
import { Users } from 'src/app/model/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Globals]
})
export class HomeComponent implements OnInit {
  user: string;
  constructor(private router: Router) { }

  ngOnInit() {
    if (Globals.nome === undefined) {
      this.router.navigate(['login']);
    }
    else {
      console.log(Globals.nome);
      this.user = Globals.nome;
    }
  }

  


}
