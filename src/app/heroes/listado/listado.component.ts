import { Component, EventEmitter, OnInit } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';
import { HeroesService } from '../services/heroes.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Series } from '../interfaces/series.interface';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
`]
})
export class ListadoComponent implements OnInit {

  termino:  string = '';
  hayError: boolean = false;
  heroes!:  Heroe[];
  series!:  Series[];
  onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {

    this.heroesService.getHeroes().subscribe( (heroes) => { this.heroes = heroes.data.results } );

    this.heroesService.getSeries().subscribe( (series) => { this.series = series.data.results } );

    this.debouncer.subscribe( valor => {console.log('deboouncer;', valor);})

  }

  buscar() {
    this.hayError;

    this.heroesService.buscarHeroe( this.termino ).subscribe( (heroes) => {
      if (heroes.data.total === 0) {
        this.hayError = true;
      } else {
        this.hayError = false;
        this.heroes = heroes.data.results
      }
     }
    );

  }

  customOptions: OwlOptions = {
    loop: true,
    margin:1,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoWidth: false,
    smartSpeed: 200,
    dots: true,
    navSpeed: 500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: true
  }

}
