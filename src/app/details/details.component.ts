import { Component, OnInit} from '@angular/core';
import { Hero } from '../heroes';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../service/hero/hero.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  
  constructor(private route: ActivatedRoute, private heroService:HeroService,private location: Location) { }
  //hero: Hero | undefined;
  heroe: Hero | undefined;
  damage_dealt !: string;
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const heroIdFromRoute = Number(routeParams.get('heroId'));
    this.getHero(heroIdFromRoute);
    //this.hero = heroes.find(hero => hero.id === heroIdFromRoute);
  }
  getHero(id: number){
    this.heroService.getHero(id).subscribe(heroes => this.heroe = heroes);
  }
  save()
  { 
    if (this.heroe) {
    this.heroService.updateHero(this.heroe)
      .subscribe(() => this.goBack());
    }
  }
  goBack(){
    this.location.back();
  }

}
