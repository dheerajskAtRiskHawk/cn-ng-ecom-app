import { Injectable } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ProductModel } from '../home/models/product.model';
import { CartItemModel } from './cart-item.model';

@Injectable()
export class CartService {
  constructor(private productService: ProductService) {}

  mapCartItems(productIds: number[]) {
    const cartItems = [];
    const allProducts = this.productService.get();
    const productsInCartItems = allProducts.filter((p) =>
      productIds.includes(p.id)
    ) as ProductModel[];

    let idCounter = 1;
    for (let product of productsInCartItems) {
      idCounter++;
      const cartItem = new CartItemModel();
      cartItem.id = idCounter;
      cartItem.productID = product.id;
      cartItem.imageUrl = product.imageUrl;
      cartItem.price = product.price;
      cartItem.totalPrice = product.price;
      cartItem.name = product.name;
      cartItems.push(cartItem);
    }
    return cartItems;
  }

  get() {
    const cartItemsString = localStorage.getItem('cartItems');
    let cartItems = cartItemsString
      ? (JSON.parse(cartItemsString) as number[])
      : [];
    return cartItems;
  }
}
