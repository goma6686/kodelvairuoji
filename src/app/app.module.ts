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
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'form', component: FormComponent},
      {path: 'registeredform', component: RegisteredformComponent},
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
