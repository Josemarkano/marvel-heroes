import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { delay, Observable, of } from 'rxjs';
import { HeroesService } from '../heroes/services/heroes.service';

@Injectable({
  providedIn: 'root'
})

export class DetallesResolver implements Resolve<any> {

  constructor (private heroeService: HeroesService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.heroeService.getPorId(route.paramMap.get('id')||'').pipe(
      delay(3000)
    );
  }

 
}
