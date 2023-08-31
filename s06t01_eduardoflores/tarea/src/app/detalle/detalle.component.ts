import { Component, Input } from '@angular/core';
import { IDetalle } from './IDetalle';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  @Input() detalle: IDetalle = {
    titulo: '',
    subtitulo: '',
    foto: {
      src: '',
      alt:''
    },
    enlace: {
      href: '', 
      texto: ''}
  }
}
