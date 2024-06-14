import { Injectable } from '@angular/core';
import * as ProductSource from '../../assets/products.json';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get('http://localhost:4000/api/products');
    // return ProductSource.products;
  }
}
