import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(username: string, password: string, role: string): Observable<any> {
    const data = {
      login: username,
      password: password,
      role: role
    };

    return this.http.post<any>('http://localhost:8080/auth/register', data);
  }
}
