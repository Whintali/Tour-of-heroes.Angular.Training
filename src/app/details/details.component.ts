import { Component, OnInit} from '@angular/core';
import { Hero,heroes } from '../heroes';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  
  constructor(private route: ActivatedRoute) { }
  hero: Hero | undefined;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const heroIdFromRoute = Number(routeParams.get('heroId'))
    this.hero = heroes.find(hero => hero.id === heroIdFromRoute)
  }

}
