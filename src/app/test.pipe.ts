import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from 'src/app/heroes';


@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {
  damage_dealt ?: number
  transform(array: Array<Hero>, args: string): Array<Hero> {
    array.sort((a: any, b: any) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
