import { Component, Input } from '@angular/core';
import { IFoto } from './IFoto';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent {
 @Input() foto: IFoto = {
    src: `https://m.media-amazon.com/images/I/61jLiCovxVL._AC_UY218_.jpg`,
    alt: `Apple iPhone 13 Pro`
  }
}
