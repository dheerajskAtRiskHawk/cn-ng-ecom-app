import { Injectable } from '@angular/core';
import * as ProductSource from '../../assets/products.json';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  get() {
    return ProductSource.products;
  }
}
