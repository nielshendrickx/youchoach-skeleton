import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {ProfileComponent} from './profile/profile.component';
import {HomeComponent} from './home/home.component';
import {CoacheeNavBarComponent} from './coachee-nav-bar/coachee-nav-bar.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'hello-world', component: HelloWorldComponent},
  {path: 'my-profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
