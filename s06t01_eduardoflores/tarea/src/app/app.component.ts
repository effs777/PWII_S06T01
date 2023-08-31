import { Component } from '@angular/core';
import { IDetalle } from './detalle/IDetalle';
import { FotoComponent } from './foto/foto.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  detalles: IDetalle[] = [
    {
      titulo: 'Apple iPhone 13 Pro', 
      subtitulo: '512GB, 6,1 pulgadas, azul sierra',
      foto: {
        src: `https://m.media-amazon.com/images/I/61jLiCovxVL._AC_UY218_.jpg`,
        alt: `Apple iPhone 13 Pro`
      },
      enlace: {
        href: `https://www.amazon.com/iPhone-bloqueado-suscripci%C3%B3n-empresa-telefon%C3%ADa/dp/B09G9D56JW/ref=sr_1_1_sspa?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3PRI00CMNWDQ8&keywords=iphone+14+pro&qid=1693454715&sprefix=iphone+14+pro%2Caps%2C161&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1`,
        texto: `Ir a Sitio`
      }
    },
    {
      titulo: 'Apple AirTag', 
      subtitulo: 'Blanco',
      foto: {
        src: `https://m.media-amazon.com/images/I/713xuNx00oS._AC_UY218_.jpg`,
        alt: `Apple AirTag`
      },
      enlace: {
        href: `https://www.amazon.com/MX532AM-A-Apple-AirTag/dp/B0933BVK6T/ref=sr_1_2_sspa?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3PRI00CMNWDQ8&keywords=iphone+14+pro&qid=1693454715&sprefix=iphone+14+pro%2Caps%2C161&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1`,
        texto: `US$28.99`
      }
    },
    {
      titulo: 'Apple iPhone 14 Pro Max', 
      subtitulo: '256 GB, Oro - Desbloqueado (Renovado)',
      foto: {
        src: `https://m.media-amazon.com/images/I/51GZNF-UxFL._AC_UY218_.jpg`,
        alt: `Apple iPhone 14 Pro Max`
      },
      enlace: {
        href: `https://www.amazon.com/-/es/Apple-iPhone-Pro-Max-256/dp/B0BN93ZDJQ/ref=sr_1_6?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3PRI00CMNWDQ8&keywords=iphone%2B14%2Bpro&qid=1693454715&sprefix=iphone%2B14%2Bpro%2Caps%2C161&sr=8-6&th=1`,
        texto: `US$1,144.97`
      }
    }
  ]
}
