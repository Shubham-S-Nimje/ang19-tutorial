import { Component } from '@angular/core';
import { CurrencyConverterPipe } from '../../../pipe/currency-converter.pipe';

@Component({
  selector: 'app-custompipes',
  imports: [CurrencyConverterPipe],
  templateUrl: './custompipes.component.html',
  styleUrl: './custompipes.component.css',
})
export class CustompipesComponent {
  amount = 10;
}
