import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TitleComponent } from './component/title/title.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './component/posts/posts.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { MyProfileComponent } from './component/my-profile/my-profile.component'
import { PostagemService } from './service/postagem.service';
import { UsersService } from './service/users.service';
import { SignInComponent } from './component/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    AboutUsComponent,
    ContactComponent,
    FooterComponent,
    PostsComponent,
    SignUpComponent,
    MyProfileComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule   
  ],
  providers: [PostagemService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

