import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const data = {
      login: username,
      password: password
    };

    return this.http.post<any>('http://localhost:8080/auth/login', data);
  }
}
