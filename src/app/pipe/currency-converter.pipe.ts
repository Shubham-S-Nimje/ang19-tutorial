import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter',
})
export class CurrencyConverterPipe implements PipeTransform {
  transform(value: number, ...args: number[]): unknown {
    if (args.length > 0) {
      let [currencyValue] = args;
      return value * currencyValue;
    } else {
      return value * 85.8;
    }
  }
}
