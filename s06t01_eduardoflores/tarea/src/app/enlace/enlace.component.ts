import { Component, Input } from '@angular/core';
import { IEnlace } from './IEnlace';

@Component({
  selector: 'app-enlace',
  templateUrl: './enlace.component.html',
  styleUrls: ['./enlace.component.css']
})
export class EnlaceComponent {
  @Input() enlace: IEnlace = {
    href: `https://www.google.hn`,
    texto: `Google`
  }
}