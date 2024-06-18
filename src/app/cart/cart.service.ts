import { Injectable } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ProductModel } from '../home/models/product.model';
import { CartItemModel } from './cart-item.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(
    private productService: ProductService,
    private http: HttpClient
  ) {}

  get() {
    const cartItemsString = localStorage.getItem('cartItems');
    let cartItems = cartItemsString
      ? (JSON.parse(cartItemsString) as number[])
      : [];
    return cartItems;
  }

  add(productID: number) {
    return this.http.post('http://localhost:4000/api/cartItems', { productID });
  }
}
