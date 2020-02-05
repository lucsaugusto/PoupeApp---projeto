import { PostsService } from 'src/app/service/posts.service';
import { SignInComponent } from './component/users/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TitleComponent } from './component/title/title.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './component/posts-pack/posts/posts.component';
import { SignUpComponent } from './component/users/sign-up/sign-up.component';
import { ConsultarUsersComponent } from './component/users/consultar-users/consultar-users.component';
import { InserirUsersComponent } from './component/users/inserir-users/inserir-users.component';
import { AlterarUsersComponent } from './component/users/alterar-users/alterar-users.component';
import { RemoverUsersComponent } from './component/users/remover-users/remover-users.component';
import { UsersService } from './service/users/users.service';
import { HomeComponent } from './component/home/home.component';
import { HelpComponent } from './component/help/help.component';
import { AlterarPostsComponent } from './component/posts-pack/alterar-posts/alterar-posts.component';
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    AboutUsComponent,
    ContactComponent,
    FooterComponent,
    PostsComponent,
    SignUpComponent,
    ConsultarUsersComponent,
    InserirUsersComponent,
    AlterarUsersComponent,
    RemoverUsersComponent,
    SignInComponent,
    HomeComponent,
    HelpComponent,
    AlterarPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsersService, PostsService],
  bootstrap: [AppComponent]
})
  


export class AppModule { }

