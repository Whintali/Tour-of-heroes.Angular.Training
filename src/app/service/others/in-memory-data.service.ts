import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../../heroes';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const heroes = [
      {
        id: 1,
        name: 'Mato',
        desc: 'A good hero',
        classH: 'Sorcerer',
        damage_dealt: '10000'
      },
      {
        id:2,
        name: 'Ada',
        desc:'A great healer',
        classH: 'Bard',
        damage_dealt: '150',
      },
      {
        id: 3,
        name: 'Val',
        desc: '',
        classH: 'Paladin',
        damage_dealt: '1500',
      },
      {
        id: 4,
        name: 'Greg',
        desc: 'A good wizard',
        classH: 'Sorcerer',
        damage_dealt: '8500',
      },
      {
        id: 5,
        name: 'Keld',
        desc: 'A good human',
        classH: 'Warrior',
        damage_dealt: '3500',
      },
      {
        id: 6,
        name: 'Devo',
        desc: '',
        classH: 'Assassin',
        damage_dealt: '25000'
      },
      {
        id: 7,
        name: 'Mag',
        desc: 'A good tank',
        classH: 'Berserker',
        damage_dealt: '8500'
      },
      {
        id: 8,
        name: 'Dom',
        desc: '',
        classH: 'Bard',
        damage_dealt: '2500'
      },
      {
        id: 9,
        name: 'Fin',
        desc: 'A good damage dealer',
        classH: 'Assassin',
        damage_dealt: '9650'
      },
      {
        id: 10,
        name: 'Gol',
        desc: '',
        classH: 'Demonist',
        damage_dealt: '18500'
      }
    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
