import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public email!: string;
  public senha!: string;

  public fazerLogin(): void {
    if (this.email && this.senha) {
      alert('Login efetuado com sucesso!');
    } else {
      alert('Preencha os campos do email e/ou senha.');
    }
  }
}
