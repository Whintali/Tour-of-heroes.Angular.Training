import { Injectable } from '@angular/core';
import { Hero,heroes } from '../../heroes';
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

}
