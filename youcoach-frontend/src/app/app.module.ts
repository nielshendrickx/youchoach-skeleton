import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AuthenticationInterceptor} from './authentication/authentication.interceptor';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {FooterComponent} from './footer/footer.component';
import {ProfileComponent} from './profile/profile.component';
import {CoacheeNavBarComponent} from './coachee-nav-bar/coachee-nav-bar.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {MaterialModule} from './material/material.module';
import {SignInComponent} from './sign-in/sign-in.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {ApplyBecomeCoachComponent} from './apply-become-coach/apply-become-coach.component';
import {MyCoachProfileComponent} from './my-coach-profile/my-coach-profile.component';
import {CoachProfileComponent} from './coach-profile/coach-profile.component';
import {FindACoachComponent} from './find-acoach/find-acoach.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RequestProfileChangeComponent} from './request-profile-change/request-profile-change.component';
import {FilterCoachesByTopicPipe} from './filter-coaches-by-topic.pipe';
import {FilterCoachesByYearPipe} from './filter-coach-by-year.pipe';
import {FilterCoachesByNamePipe} from './filter-coach-by-name.pipe';
import {RequestSessionComponent} from './request-session/request-session.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ProfileComponent,
    CoacheeNavBarComponent,
    HomeComponent,
    RegisterComponent,
    SignInComponent,
    ApplyBecomeCoachComponent,
    MyProfileComponent,
    MyCoachProfileComponent,
    CoachProfileComponent,
    FindACoachComponent,
    RequestProfileChangeComponent,
    FilterCoachesByTopicPipe,
    FilterCoachesByYearPipe,
    FilterCoachesByNamePipe,
    RequestSessionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
