import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';
import { Posts } from 'src/app/model/posts';
import { Globals } from 'src/app/model/globals';
import { Users } from 'src/app/model/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [Globals]
})
export class PostsComponent implements OnInit {
  //Atributos
  user: Users;
  posts: Array<Posts> = new Array<Posts>();
  post: Posts = new Posts(0, '', '', '', 0);
  idPostagem: number;
  showId: boolean
  showAll: boolean
  //Construtor
  constructor(private postService: PostsService, private router: Router) { }

  //É chamado assim que baixar todos os componentes e serviços na maquina do usuario;
  ngOnInit() {
    this.btnClickAll();
    if (Globals.user === undefined) {
      this.router.navigate(['sign-in']);
    }
    else {
      this.user = Globals.user;
    }
  }

  //Começa a minha aplicação
  btnClickAll() {
    this.postService.getAll().subscribe((postOut: Posts[]) => {
      this.posts = postOut;
      this.showId = false;
      this.showAll = true;
    });
  }

  btnClickId() {
    this.postService.getById(this.idPostagem).subscribe((postOut: Posts) => {
      this.post = postOut;
      this.showId = true;
      this.showAll = false;
    })
  }

}
