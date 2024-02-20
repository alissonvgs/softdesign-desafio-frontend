import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Livro } from './livro.model';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private baseUrl = 'http://localhost:8080/api/livro';
  private livrosSubject: BehaviorSubject<Livro[]> = new BehaviorSubject<Livro[]>([]);
  public livros$: Observable<Livro[]> = this.livrosSubject.asObservable();

  private token = '';

  constructor(private http: HttpClient, private localStorage: LocalStorageService) {
    this.token = localStorage.get('token') ?? '';
    this.consultarTodosLivros();
// this.consultarLivroPorId(1);
  }

  consultarTodosLivros(): void {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

    this.http.get<Livro[]>(`${this.baseUrl}`, { headers }).subscribe(
      livros => {
        console.log('Sucesso ao consultar todos os livros');
        this.livrosSubject.next(livros);
      },
      error => {
        console.error('Erro ao consultar livros:', error);
      }
    );
  }

  criarLivro(livroDTO: any): Observable<Livro> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

    return this.http.post<Livro>(`${this.baseUrl}/post`, livroDTO, {headers});
  }

    consultarLivroPorId(id: number): Observable<Livro> {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
      console.log(id);
      return this.http.get<Livro>(`${this.baseUrl}/${id}`, {headers});
    }

}
