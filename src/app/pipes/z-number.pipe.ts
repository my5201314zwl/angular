import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zNumber'
})
export class ZNumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
