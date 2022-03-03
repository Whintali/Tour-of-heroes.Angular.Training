import { Injectable } from '@angular/core';
import { Hero } from '../../heroes';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private http: HttpClient,
    ) {
    }
    private heroesUrl = 'api/heroes';
    getHeroes(): Observable<Hero[]>{
      return this.http.get<Hero[]>(this.heroesUrl)
    }
    getHero(id: number): Observable<Hero> {
      const url = `${this.heroesUrl}/${id}`;
      return this.http.get<Hero>(url)
    }
    getHeroTri(): Observable<Hero[]>{
      return this.http.get<Hero[]>(this.heroesUrl).pipe(
      map(heroes => heroes.sort((a1: Hero, a2: Hero) => a2.damage_dealt - a1.damage_dealt ))
    );}
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    updateHero(hero: Hero): Observable<any> {
      return this.http.put(this.heroesUrl, hero, this.httpOptions);
    }
    addHero(hero: Hero): Observable<Hero> {
      return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions)
      ;
    }
    deleteHero(id: number): Observable<Hero> {
      const url = `${this.heroesUrl}/${id}`;
      return this.http.delete<Hero>(url, this.httpOptions);
    }
}
