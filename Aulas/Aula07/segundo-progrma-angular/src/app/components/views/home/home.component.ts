import { Component } from '@angular/core';
import { Produto } from '../../../models/produto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public produtos: Array<Produto> = new Array<Produto>();
  public produtos2: Produto[] = [];

  constructor() {
    this.produtos.push(new Produto('Bolo de chocolate', 40));
    this.produtos.push(new Produto('Bolo de morango', 50));
    this.produtos.push(new Produto('Bolo de cenoura', 45));

    console.log(this.produtos);
  }
}
