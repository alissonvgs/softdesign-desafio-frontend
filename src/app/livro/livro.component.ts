import { Component, OnInit } from '@angular/core';

import { LivroService } from './livro.service';
import { Livro } from './livro.model';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {
  livroDTO: any = {};
  livros: Livro[] = [];
  livro: Livro | null = null;

  constructor(private livroService: LivroService, private localStorage: LocalStorageService) {}

  ngOnInit(): void {
    this.livroService.livros$.subscribe(
      (livros: Livro[]) => {
        this.livros = livros;
      },
      (error: any) => {
        console.error('Erro ao obter lista de livros:', error);
      }
    );
  }

  criarLivro(): void {
    this.livroService.criarLivro(this.livroDTO )
      .subscribe(
        (livro: Livro) => {
          console.log('Livro criado com sucesso:', livro);
          this.livroDTO = {};
          this.livroService.consultarTodosLivros();
        },
        (error: any) => {
          console.error('Erro ao criar livro:', error);
        }
      );
  }

    private getToken(): string | null {
      return this.localStorage.get('token');
    }

}
