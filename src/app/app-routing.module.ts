import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LivroComponent } from './livro/livro.component';
import { LivroDetalhadoComponent } from './livro/livro-detalhado.component';
import { RegisterFormComponent } from './login/register-form.component';
import { LoginFormComponent } from './login/login-form.component';


const routes: Routes = [
  // Rotas criadas
  { path: 'livro', component: LivroComponent },
  { path: 'livro/:id', component: LivroDetalhadoComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: '', component: LoginFormComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
