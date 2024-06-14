import { Injectable } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ProductModel } from '../home/models/product.model';
import { CartItemModel } from './cart-item.model';

@Injectable()
export class CartService {
  constructor(private productService: ProductService) {}

  get() {
    const cartItemsString = localStorage.getItem('cartItems');
    let cartItems = cartItemsString
      ? (JSON.parse(cartItemsString) as number[])
      : [];
    return cartItems;
  }
}
