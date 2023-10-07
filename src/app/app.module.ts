import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgFor} from '@angular/common';

import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HeaderComponent} from './header/header.component';
import {LinksComponent} from './header/links/links.component';
import {FormComponent} from './main/form/form.component';
import {HomeComponent} from './main/home/home.component';
import {RegisteredformComponent} from './main/registeredform/registeredform.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

//https://material.angular.io/components
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {RegisterComponent} from './main/auth/register/register.component';
import {LoginComponent} from './main/auth/login/login.component';
import {ViewCommentComponent} from './main/view-comment/view-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LinksComponent,
    FormComponent,
    HomeComponent,
    RegisteredformComponent,
    RegisterComponent,
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
      {path: 'home', component: HomeComponent},
      {path: 'form', component: FormComponent},
      {path: 'registeredform', component: RegisteredformComponent},
    ]),
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
