import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceText'
})
export class SliceTextPipe implements PipeTransform {

  transform(value: string, maxChars: number): string {
    return value.length > maxChars ? value.substring(0, maxChars) + '...' : value
  }

}
