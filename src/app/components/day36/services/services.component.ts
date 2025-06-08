import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  productData:
    | {
        name: string;
        brand: string;
        price: number;
      }[]
    | undefined;

  constructor(private productService: ProductService) {}

  getProductData() {
    this.productData = this.productService.getProductData();
    // console.log(this.productData);
  }
}
