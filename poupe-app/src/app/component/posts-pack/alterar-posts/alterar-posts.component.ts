import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';
import { Users } from 'src/app/model/users';
import { Posts } from 'src/app/model/posts';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-alterar-posts',
  templateUrl: './alterar-posts.component.html',
  styleUrls: ['./alterar-posts.component.css']
})
export class AlterarPostsComponent implements OnInit {
  //Atributos
  username: string;
  user: Users;
  posts: Array<Posts> = new Array<Posts>();
  post: Posts = new Posts();
  idPostagem: number;
  showId: boolean
  showAll: boolean
  //Construtor
  constructor(private postService: PostsService, private router: Router, private route: ActivatedRoute, private loginService: LoginService) { }

  //É chamado assim que baixar todos os componentes e serviços na maquina do usuario;
  ngOnInit() {
    let id: number = this.route.snapshot.params["id"];
    this.findById(id);

    if (!localStorage.getItem("token")) {
      alert("Você não pode acessar está página sem estar logado")
      this.router.navigate(['/login']);
    }
    else {
      this.username = localStorage.getItem("nome");
      this.loginService.log.next(true);
    }
  }

  findById(id: number) {
    this.postService.getById(id).subscribe((postOut: Posts) => {
      this.post = postOut;
      this.showId = true;
      this.showAll = false;
    }, err => {
      console.log(`Erro cod: ${err.status}`);
    });
  }

  enviarPost() {
    this.postService.update(this.post).subscribe((postOut: Posts) => {
      this.post = postOut;
      this.router.navigate(['/feed']);
    });
  }
}
