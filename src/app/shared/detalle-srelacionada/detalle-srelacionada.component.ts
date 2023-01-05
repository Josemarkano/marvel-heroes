import { Component, Input } from '@angular/core';
import { SerieR } from 'src/app/heroes/interfaces/serierelacionada.interface';
import { HeroeD } from '../../heroes/interfaces/heroedetalles.interface';

@Component({
  selector: 'app-detalle-srelacionada',
  templateUrl: './detalle-srelacionada.component.html',
  styles: [
  ]
})
export class DetalleSrelacionadaComponent {

  @Input() series!: SerieR[];
  @Input() heroe!: HeroeD;

}
