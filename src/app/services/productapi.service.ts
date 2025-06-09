import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductapiService {
  apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProductList() {
    return this.http.get(this.apiUrl);
  }
}
