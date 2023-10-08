import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FormComponent} from './main/form/form.component';
import {RegisteredformComponent} from './main/registeredform/registeredform.component';
import {ViewCommentComponent} from "./main/view-comment/view-comment.component";

const routes: Routes = [
  {path: '', component: FormComponent},
  {path: 'view', component: ViewCommentComponent},
  {path: 'registeredform', component: RegisteredformComponent/*, canActivate: [SocialAuthService]*/},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
