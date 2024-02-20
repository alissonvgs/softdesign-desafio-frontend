import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LivroComponent } from './livro.component';
import { LivroDetalhadoComponent } from './livro-detalhado.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LivroComponent,
    LivroDetalhadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    LivroComponent,
    LivroDetalhadoComponent
  ]
})
export class LivroModule { }
