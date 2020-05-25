import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProfileComponent} from './profile/profile.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {ApplyBecomeCoachComponent} from './apply-become-coach/apply-become-coach.component';
import {MyCoachProfileComponent} from './my-coach-profile/my-coach-profile.component';
import {CoachProfileComponent} from './coach-profile/coach-profile.component';
import {FindACoachComponent} from './find-acoach/find-acoach.component';
import {RequestProfileChangeComponent} from './request-profile-change/request-profile-change.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'users/:id', component: ProfileComponent},
  {path: 'coach/:id', component: CoachProfileComponent},
  {path: 'myProfile', component: MyProfileComponent},
  {path: 'applyBecomeCoach', component: ApplyBecomeCoachComponent},
  {path: 'mycoachprofile', component: MyCoachProfileComponent},
  {path: 'findACoach', component: FindACoachComponent},
  {path: 'requestProfileChange', component: RequestProfileChangeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
