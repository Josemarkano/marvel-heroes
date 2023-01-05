import { Component, Input } from '@angular/core';
import { HeroeD } from 'src/app/heroes/interfaces/heroedetalles.interface';

@Component({
  selector: 'app-detalle-heroe',
  templateUrl: './detalle-heroe.component.html',
  styles: [`

  img {
    width: 100%;
    height: 100%;
  }
  
`]
})
export class DetalleHeroeComponent {

  @Input() heroe!: HeroeD;
}
