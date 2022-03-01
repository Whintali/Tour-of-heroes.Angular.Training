export interface Hero {
  id: number;
  name: string;
  desc: string;
  class: string;
  damage_dealt: string;
}

export const heroes = [
  {
    id: 1,
    name: 'Matho',
    desc: 'A good hero',
    class: 'Sorcerer',
    damage_dealt: '10000'
  },
  {
    id:2,
    name: 'Ada',
    desc:'A great healer',
    class: 'bard',
    damage_dealt: '150',
  },
  {
    id: 3,
    name: 'Val',
    desc: '',
    class: 'Paladin',
    damage_dealt: '1500',
  },
  {
    id: 4,
    name: 'Greg',
    desc: 'A good wizard',
    class: 'Sorcerer',
    damage_dealt: '8500',
  },
  {
    id: 5,
    name: 'Keld',
    desc: 'A good human',
    class: 'Warrior',
    damage_dealt: '3500',
  },
  {
    id: 6,
    name: 'Devo',
    desc: '',
    class: 'Assassin',
    damage_dealt: '25000'
  },
  {
    id: 7,
    name: 'Mag',
    desc: 'A good tank',
    class: 'Berserker',
    damage_dealt: '8500'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/