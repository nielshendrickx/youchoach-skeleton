import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {ProfileComponent} from './profile/profile.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {ApplyBecomeCoachComponent} from './apply-become-coach/apply-become-coach.component';
import {MyCoachProfileComponent} from './my-coach-profile/my-coach-profile.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'hello-world', component: HelloWorldComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'users/:id', component: ProfileComponent},
  {path: 'myProfile', component: MyProfileComponent},
  {path: 'applyBecomeCoach', component: ApplyBecomeCoachComponent},
  {path: 'mycoachprofile', component: MyCoachProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
