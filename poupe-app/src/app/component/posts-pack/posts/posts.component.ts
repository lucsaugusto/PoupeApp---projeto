import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';
import { Posts } from 'src/app/model/posts';
import { Globals } from 'src/app/model/globals';
import { Users } from 'src/app/model/users';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [Globals]
})
export class PostsComponent implements OnInit {
  //Atributos
  username:string;
  user: Users;
  posts: Array<Posts> = new Array<Posts>();
  post: Posts = new Posts();
  idPostagem: number;
  showId: boolean
  showAll: boolean
  //Construtor
  constructor(private postService: PostsService, private router: Router, private route: ActivatedRoute, ) { }

  //É chamado assim que baixar todos os componentes e serviços na maquina do usuario;
  ngOnInit() {
    this.btnClickAll();

    if (Globals.nome === undefined) {
      this.router.navigate(['login']);
    }
    else {
      console.log(Globals.nome);
      this.username = Globals.nome;
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
    });
  }

  enviarPost() {
    this.postService.insert(this.post).subscribe((postOut: Posts) => {
      this.post = postOut;
      this.post.titulo = "";
      this.post.texto = "";
      this.post.linkimg = "";
      this.post.dataInclusao = "";
      this.btnClickAll();
    });

  }

  editarPost() {
    this.postService.update(this.post).subscribe((postOut: Posts) => {
      this.post = postOut;
      this.router.navigate(['feed']);
    });
  }
}
