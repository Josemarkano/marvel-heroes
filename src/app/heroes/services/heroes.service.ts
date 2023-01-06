import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MarvelHeroes } from '../interfaces/heroes.interface';
import { MarvelSeries } from '../interfaces/series.interface';
import { HeroeDetalles } from '../interfaces/heroedetalles.interface';
import { SerieRela } from '../interfaces/serierelacionada.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private link  : string = 'http://gateway.marvel.com/v1/public/';
  private apiKey: string = '&ts=1&apikey=569c3933ca52a5330513e410cb2bc1d9&hash=197c33c8c9b8aa31e047aa7ceb220edb';

  constructor( private http: HttpClient ) { }

  getHeroes (): Observable<MarvelHeroes> {
    return this.http.get<MarvelHeroes>(`${this.link}characters?${this.apiKey}`);
  }

  getSeries (): Observable<MarvelSeries> {
    return this.http.get<MarvelSeries>(`${this.link}series?${this.apiKey}`);
  }

  buscarHeroe (termino: string): Observable<MarvelHeroes> {
    return this.http.get<MarvelHeroes>(`${this.link}characters?nameStartsWith=${termino}${this.apiKey}`);
  }

  getPorId (id: string): Observable<HeroeDetalles> {
    return this.http.get<HeroeDetalles>(`${this.link}characters/${id}?${this.apiKey}`);
  }

  getSerieRelacionada (id: string): Observable<SerieRela> {
    return this.http.get<SerieRela>(`${this.link}characters/${id}/series?${this.apiKey}`);
  }

}
