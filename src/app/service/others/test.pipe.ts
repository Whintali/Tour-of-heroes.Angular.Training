import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe {
  damame_dealt?:number;
  construtor(args: TestPipe = {}) {
    
  }

}
