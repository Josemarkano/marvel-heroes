import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { DetallesComponent } from './detalles/detalles.component';
import { DetallesResolver } from '../resolvers/detalles.resolver';


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
        component: DetallesComponent,
        resolve: { detalles: DetallesResolver }
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
