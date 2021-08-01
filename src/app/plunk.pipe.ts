import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plunk'
})
export class PlunkPipe implements PipeTransform {
  transform(value: any[], args: any): any {
    const filteredArray = value.filter(item => item.id !== args.id);
    return filteredArray.map(item => {
      return "left-" + item.id;
    });
  }
}
