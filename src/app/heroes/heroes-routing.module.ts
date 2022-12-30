import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { DetallesComponent } from './detalles/detalles.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path: 'listado',
        component: ListadoComponent
      },
      { 
        path: 'detalles/:id',
        component: DetallesComponent
      },
      {
        path: '**',
        redirectTo: 'listado'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
