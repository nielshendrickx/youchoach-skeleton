import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProfileComponent} from './profile/profile.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {ApplyBecomeCoachComponent} from './apply-become-coach/apply-become-coach.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'users/:id', component: ProfileComponent},
  {path: 'myProfile', component: MyProfileComponent},
  {path: 'applyBecomeCoach', component: ApplyBecomeCoachComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
