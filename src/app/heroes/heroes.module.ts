import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CarouselModule } from 'ngx-owl-carousel-o';


import { HeroesRoutingModule } from './heroes-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { DetallesComponent } from './detalles/detalles.component';


@NgModule({
  declarations: [
    ListadoComponent,
    DetallesComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    CarouselModule,
    FormsModule
  ]
})
export class HeroesModule { }
