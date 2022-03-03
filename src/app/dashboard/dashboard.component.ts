import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes';
import { HeroService } from '../service/hero/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes:Hero[]=[];
  constructor(private heroService:HeroService) {
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(){
    console.log(this.heroService.getHeroTri().subscribe(heroes => this.heroes = heroes));
    this.heroService.getHeroTri().subscribe(heroes => this.heroes = heroes);
  }

}
