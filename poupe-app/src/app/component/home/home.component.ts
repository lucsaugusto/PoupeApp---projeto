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
  user: Users;
  constructor(private router: Router) { }

  ngOnInit() {
    if (Globals.user === undefined) {
      this.router.navigate(['login']);
    }
    else {
      this.user = Globals.user;
    }
  }

  


}
