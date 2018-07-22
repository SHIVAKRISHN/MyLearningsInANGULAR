import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customString'
})
export class CustomStringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let outPutString=value;
    let Result= outPutString+" retruned by custom pipe"
    return Result;
  }

}
