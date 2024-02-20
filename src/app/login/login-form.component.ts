import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login-form.service';
import { LocalStorageService } from '../localStorage/local-storage.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private localStorage: LocalStorageService, private router: Router) { }

  login(): void {
    const data = {
      login: this.username,
      password: this.password
    };

    this.http.post<any>('http://localhost:8080/auth/login', data)
      .subscribe(
        response => {
           const token = response.token;
           this.localStorage.set('token', token);
           alert('Sucesso ao fazer login');
           this.router.navigate(['/livro']);

        },
        error => {
          alert('Erro ao fazer login');
          console.error('Erro ao fazer login:', error);
        }
      );
  }
}
