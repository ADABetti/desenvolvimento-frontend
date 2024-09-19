import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css',
})
export class EventBindingComponent {
  constructor() {
    setTimeout(() => {
      alert('Continue comprando, por favor! Precisamos do seu dinheiro');
    }, 2000);
  }

  public login(): void {
    alert('Login efetuado com sucesso');
  }
  public enviarEmail(): void {
    alert('Vimos que você tem interesse no item');
  }
}
