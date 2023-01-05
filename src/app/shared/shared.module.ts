import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BarraInicioComponent } from './barra-inicio/barra-inicio.component';
import { FooterComponent } from './footer/footer.component';
import { DetalleHeroeComponent } from './detalle-heroe/detalle-heroe.component';
import { DetalleSrelacionadaComponent } from './detalle-srelacionada/detalle-srelacionada.component';


@NgModule({
  declarations: [
    BarraInicioComponent,
    FooterComponent,
    DetalleHeroeComponent,
    DetalleSrelacionadaComponent
  ],
  exports: [
    BarraInicioComponent,
    FooterComponent,
    DetalleHeroeComponent,
    DetalleSrelacionadaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
