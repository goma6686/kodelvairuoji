import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FormComponent} from './main/form/form.component';
import {RegisteredformComponent} from './main/registeredform/registeredform.component';
import {ViewCommentComponent} from "./main/view-comment/view-comment.component";

const routes: Routes = [
  {path: '', redirectTo: 'write', pathMatch: 'full'},
  {path: 'write', component: FormComponent},
  {path: 'view', component: ViewCommentComponent},
  {path: 'registeredform', component: RegisteredformComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
