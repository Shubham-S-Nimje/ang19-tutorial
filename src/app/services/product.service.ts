import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {
    console.log('product service');
  }

  getProductData() {
    return [
      { name: 'Mobile', brand: 'Samsung', price: 15000 },
      { name: 'Laptop', brand: 'Dell', price: 55000 },
      { name: 'Tablet', brand: 'Apple', price: 45000 },
      { name: 'Headphones', brand: 'Sony', price: 5000 },
      { name: 'Smartwatch', brand: 'Noise', price: 3000 },
    ];
  }
}
