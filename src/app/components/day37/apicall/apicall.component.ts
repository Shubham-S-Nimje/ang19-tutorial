import { Component } from '@angular/core';
import { ProductapiService } from '../../../services/productapi.service';
import { CurrencyConverterPipe } from '../../../pipe/currency-converter.pipe';

@Component({
  selector: 'app-apicall',
  imports: [CurrencyConverterPipe],
  templateUrl: './apicall.component.html',
  styleUrl: './apicall.component.css',
})
export class ApicallComponent {
  productList: any;
  constructor(private productapiService: ProductapiService) {}

  ngOnInit() {
    this.productapiService.getProductList().subscribe((data: any) => {
      this.productList = data.products;
      console.log(data);
    });
  }
}
