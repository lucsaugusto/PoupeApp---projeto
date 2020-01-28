import { ConsultarUsersComponent } from './component/users/consultar-users/consultar-users.component';
import { AlterarUsersComponent } from './component/users/alterar-users/alterar-users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component'
import { AboutUsComponent } from './component/about-us/about-us.component';
import { PostsComponent } from './component/posts-pack/posts/posts.component';
import { SignUpComponent } from './component/users/sign-up/sign-up.component';
import { SignInComponent } from './component/users/sign-in/sign-in.component';
import { InserirUsersComponent } from './component/users/inserir-users/inserir-users.component';
import { HomeComponent } from './component/home/home.component';
import { HelpComponent } from './component/help/help.component';
import { AlterarPostsComponent } from './component/posts-pack/alterar-posts/alterar-posts.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'contato', component: ContactComponent},
  {path: 'sobre', component: AboutUsComponent},
  {path: 'feed', component: PostsComponent},
  {path: 'feed/:id', component: AlterarPostsComponent},
  {path: 'login', component: SignInComponent},
  {path: 'cadastrar', component: SignUpComponent},
  {path: 'editar/:id', component: AlterarUsersComponent},
  {path: 'consultar', component: ConsultarUsersComponent},
  {path: 'inserir', component: InserirUsersComponent},
  {path: 'remover/:id', component: PostsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'ajuda', component: HelpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
