import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  public email!: string;
  public cpf!: string;
  public senha!: string;
  public confirmacaoSenha!: string;
}
