import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public email!: string;
  public senha!: string;

  public login(): void {
    alert('Login efetuado com sucesso!');
  }
}
