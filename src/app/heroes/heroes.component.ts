import { Component,OnInit } from '@angular/core';
import { Hero } from '../heroes';
import { HeroService } from '../service/hero/hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  //Variable
  heroes:Hero[]=[];
  Dmg !: number ;
  verif !: string ;
  selectedHero?: Hero;

  //Constructor
  constructor(private heroService: HeroService){}
  
  //Methods
  ngOnInit(): void {
    this.getHeroes()
  }
  OnChange(event:any){
    Number(event.target.value);
    if(isNaN(event.target.value)){
      if(event.target.value.length>16){
        this.verif = "";
        alert("Name too long, 15 maximum characters");
      }
    }
    else{
      if(Number(event.target.value)>30000){
        this.Dmg = 0;
        alert("Damage too high, cannot exceed 30000");
      }
    }
  }

  onSelect(hero: Hero): void {
  this.selectedHero = hero;
  }
  getHeroes(){
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }
  deleteHero(id : number){
    this.heroService.deleteHero(id).subscribe();
    this.getHeroes();
  }
  addHero(name:string,classH:string,desc:string,damage_dealt:string){
    var damageD = parseInt(damage_dealt,10);
    if(isNaN(damageD)){
      return;
    }
    else{
      if(damageD<0){
        alert("Only positive number ! (Not push)") 
        return;
        }
      else {
        damage_dealt = damage_dealt.trim();
        if (!damage_dealt) { 
          return; 
        }
        name = name.trim();
        if (!name) { 
          return; 
        }
        classH = classH.trim();
        if (!classH) { 
          return; 
        }
        desc = desc.trim();
        this.heroService.addHero({ name,classH,desc,damage_dealt } as unknown as Hero)
        .subscribe(hero => {this.heroes.push(hero);});
      }
    }
  }
}


