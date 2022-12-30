import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BarraInicioComponent } from './barra-inicio/barra-inicio.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    BarraInicioComponent,
    FooterComponent
  ],
  exports: [
    BarraInicioComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
