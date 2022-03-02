import { Component,OnInit } from '@angular/core';

import { Hero,heroes } from '../heroes';
import { HeroService } from '../service/hero/hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  heroes:Hero[]=[];
  constructor(private heroService: HeroService){}
  ngOnInit(): void {
    this.getHeroes()
  }
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
  }
  getHeroes(){
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }
  delete(hero:Hero){}
  addHero(name:string,classH:string,desc:string,damage_dealt:number){
    name = name.trim();
    if (!name) { return; }
    classH = classH.trim();
    if (!classH) { return; }
    desc = desc.trim();
    if (!desc) { return; }
    this.heroService.addHero({ name,classH,desc,damage_dealt} as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });}

}


