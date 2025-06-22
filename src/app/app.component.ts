import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tarjeta-marco';
  correo!: string;
  cel!: string;
  nombre!: string;
  puesto!: string;
  direccion!: string;
  empresa!: string;

  constructor() {
    this.correo = 'legal@naxos-technology.com.pa';
    this.cel = '+52 56 10 40 35 68';
    this.nombre = 'Marco Polo Castro Perez';
    this.puesto = 'General Counsel';
    this.direccion = 'Costa del Este, PH Financial Park Piso 18 Oficina 1803';
    this.empresa = 'NAXOS TECHNOLOGY LIMITED';
  }
}
