import { Pipe, PipeTransform } from '@angular/core';
import * as moment from "moment"

@Pipe({
  name: 'elapsedTime'
})
export class elapsedTimePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return moment(value).fromNow()
  }

}
