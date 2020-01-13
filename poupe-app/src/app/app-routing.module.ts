import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component'
import { AboutUsComponent } from './component/about-us/about-us.component';
import { PostsComponent } from './component/posts/posts.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { MyProfileComponent } from './component/my-profile/my-profile.component';
import { SignInComponent } from './component/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'sign-in', component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
