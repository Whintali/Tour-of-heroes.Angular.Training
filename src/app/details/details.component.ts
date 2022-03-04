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
  //Variable
  verif !: string;
  Dmg !: number;
  //hero: Hero | undefined;
  heroe !: Hero ;
  damage_dealt !: string;

  //Constructor
  constructor(private route: ActivatedRoute, private heroService:HeroService,private location: Location) { }
  
  //Methods
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const heroIdFromRoute = Number(routeParams.get('heroId'));
    this.getHero(heroIdFromRoute);
    //this.hero = heroes.find(hero => hero.id === heroIdFromRoute);
  }

  OnChange(event:any){
    Number(event.target.value);
    if(isNaN(event.target.value)){
      if(event.target.value.length>16){
        this.heroe.name = "";
        alert("Name too long, 15 maximum characters");
      }
    }
    else{
      if(Number(event.target.value)>30000){
        this.heroe.damage_dealt = 0
        alert("Damage too high, cannot exceed 30000");
      }
    }
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
