import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from 'src/app/heroes';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {
  transform(value: number, damage_dealt?: number): Hero{
      if(this.damage_dealt > this.value){
          return Hero
      }
  }

}
