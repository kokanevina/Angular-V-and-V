import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: any[]): unknown {
    let index=args[0];
    
    let reverseString="";
    for(let i=index;i>=0;i--)
      reverseString=reverseString+value.charAt(i);
    return reverseString;
  }

}
