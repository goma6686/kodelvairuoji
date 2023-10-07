import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgFor} from '@angular/common';
import { GoogleLoginProvider } from 'angularx-social-login';

import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HeaderComponent} from './header/header.component';
import {LinksComponent} from './header/links/links.component';
import {FormComponent} from './main/form/form.component';
import {RegisteredformComponent} from './main/registeredform/registeredform.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

//https://material.angular.io/components
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {LoginComponent} from './main/auth/login/login.component';
import {ViewCommentComponent} from './main/view-comment/view-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LinksComponent,
    FormComponent,
    RegisteredformComponent,
    LoginComponent,
    ViewCommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'home', component: FormComponent},
      {path: 'full-form', component: RegisteredformComponent},
    ]),
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true, //keeps the user signed in
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('551554914709-qm8am9vc5nrfai80rd0tburs9pu678jd.apps.googleusercontent.com') // your client id
        }
      ]
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }