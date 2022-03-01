import { Component, OnInit } from '@angular/core';
import { heroes } from '../heroes';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  heroes = heroes
  ngOnInit(): void {
  }

}
