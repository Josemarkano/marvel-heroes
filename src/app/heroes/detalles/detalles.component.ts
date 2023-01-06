import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../services/heroes.service';
import { HeroeD } from '../interfaces/heroedetalles.interface';
import { SerieR } from '../interfaces/serierelacionada.interface';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
 
})
export class DetallesComponent implements OnInit {

  heroe: HeroeD = {
    thumbnail: {
      path:      '', 
      extension: ''
    }
  };

  series: SerieR[] = [{
    thumbnail: {
      path:      '',
      extension: ''
    },
    urls: [{
      type:      '',
      url:       ''
    }]
  }];
  

  constructor( private activatedRoute: ActivatedRoute, private heroesService: HeroesService) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe( ({ id }) => {

      this.heroesService.getPorId(id).subscribe( (heroe) => {this.heroe = heroe.data.results[0]});
      this.heroesService.getSerieRelacionada(id).subscribe( (series) => {this.series = series.data.results.slice(0,3); console.log(series);
      });

    }
  
   );

   

  }

}
