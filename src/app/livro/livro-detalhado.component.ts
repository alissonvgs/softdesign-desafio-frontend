import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LivroService } from './livro.service';
import { Livro } from './livro.model';
import { LocalStorageService } from '../localStorage/local-storage.service';


@Component({
  selector: 'app-livro-detalhado',
  templateUrl: './livro-detalhado.component.html',
  styleUrls: ['./livro-detalhado.component.css']
})
export class LivroDetalhadoComponent implements OnInit{
  livro: Livro | null = null;
  idDoLivro: number = 0;

  constructor(private livroService: LivroService, private localStorage: LocalStorageService,  private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idDoLivro = +params['id'];
      this.obterDetalheLivro(this.idDoLivro);
    });
  }

obterDetalheLivro(id: number): void {
  this.livroService.consultarLivroPorId(Number(id))
    .subscribe(
      (livro: Livro) => {
        if (livro) {
          console.log('Livro recebido:', livro);
          this.livro = livro;
        } else {
          console.error('O serviço retornou um livro nulo.');
        }
      },
      (error: any) => {
        console.error('Erro ao consultar livro:', error);
      }
    );
}

    private getToken(): string | null {
      return this.localStorage.get('token');
    }

}
