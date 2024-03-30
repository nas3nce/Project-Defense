import { Pipe, PipeTransform } from '@angular/core';
import * as moment from "moment"

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return moment(value).fromNow()
  }

}
