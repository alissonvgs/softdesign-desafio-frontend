import { Component } from '@angular/core';
import { RegisterService } from './register-form.service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  username: string = '';
  password: string = '';
  role: string = '';

   roles: string[] = ['ADMIN', 'USER', 'TEST'];

  constructor(private registerService: RegisterService) { }

  register(): void {
    this.registerService.register(this.username, this.password, this.role)
      .subscribe(
        response => {
          alert('Usuário registrado com sucesso:');
          console.log('Usuário registrado com sucesso:', response);
        },
        error => {
          alert('Erro ao registrar usuário');
          console.error('Erro ao registrar usuário:', error);
        }
      );
  }
}
