import { Users } from './../../../model/users';
import { Globals } from './../../../model/globals';
import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';
import { Posts } from 'src/app/model/posts';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [Globals]
})
export class PostsComponent implements OnInit {
  //Atributos
  username:string;
  user: Users= new Users(0,"","","","",null,null,null,null); //// Aqui
  posts: Array<Posts> = new Array<Posts>();
  post: Posts = new Posts();
  idPostagem: number;
  showId: boolean;
  showAll: boolean;
  valor: any;
  //Construtor
  constructor(private postService: PostsService, private router: Router, private route: ActivatedRoute, private loginService: LoginService) { }

  //É chamado assim que baixar todos os componentes e serviços na maquina do usuario;
  ngOnInit() {
    this.btnClickAll();

    if (!localStorage.getItem("token")) {
      alert("Você não pode acessar está página sem estar logado")
      this.router.navigate(['/login']);
    }
    else {
      this.username = Globals.user.nome;
      this.loginService.log.next(true);
      window.scrollTo(0, 0);
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
    this.valor = <any>Globals.user.idUsuario;
    alert(this.valor)
    this.user.idUsuario = <number>this.valor;
    this.post.usuario = this.user;

    this.postService.insert(this.post).subscribe((postOut: Posts) => {
      this.post = postOut;
      this.post.titulo = "";
      this.post.texto = "";
      this.post.linkimg = "";
      this.post.preco = null;
      console.log("IdUsuario " + this.post.usuario.idUsuario);
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
