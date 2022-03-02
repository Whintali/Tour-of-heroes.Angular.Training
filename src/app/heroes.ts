export interface Hero {
  id: number;
  name: string;
  desc: string;
  classH: string;
  damage_dealt: number;
}

export const heroes = [
  {
    id: 1,
    name: 'Matho',
    desc: 'A good hero',
    classH: 'Sorcerer',
    damage_dealt: 10000
  },
  {
    id:2,
    name: 'Ada',
    desc:'A great healer',
    classH: 'bard',
    damage_dealt: 150,
  },
  {
    id: 3,
    name: 'Val',
    desc: '',
    classH: 'Paladin',
    damage_dealt: 1500,
  },
  {
    id: 4,
    name: 'Greg',
    desc: 'A good wizard',
    classH: 'Sorcerer',
    damage_dealt: 8500,
  },
  {
    id: 5,
    name: 'Keld',
    desc: 'A good human',
    classH: 'Warrior',
    damage_dealt: 3500,
  },
  {
    id: 6,
    name: 'Devo',
    desc: '',
    classH: 'Assassin',
    damage_dealt: 25000
  },
  {
    id: 7,
    name: 'Mag',
    desc: 'A good tank',
    classH: 'Berserker',
    damage_dealt: 8500
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/