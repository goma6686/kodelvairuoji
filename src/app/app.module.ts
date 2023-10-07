import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { LinksComponent } from './header/links/links.component';
import { FormComponent } from './main/form/form.component';
import { HomeComponent } from './main/home/home.component';
import { RegisteredformComponent } from './main/registeredform/registeredform.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

//https://material.angular.io/components
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LinksComponent,
    FormComponent,
    HomeComponent,
    RegisteredformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
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
