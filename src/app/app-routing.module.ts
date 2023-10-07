import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './main/form/form.component';
import { HomeComponent } from './main/home/home.component';
import { RegisteredformComponent } from './main/registeredform/registeredform.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'form', component: FormComponent},
  {path: 'registeredform', component: RegisteredformComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
