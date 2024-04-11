import { Component } from '@angular/core';
import { CartItemModel } from '../cart-item.model';
import * as ProductSource from '../../../assets/products.json';
import { ProductModel } from '../../home/models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartItems: CartItemModel[] = [];

  ngOnInit() {
    const cartItemsString = localStorage.getItem('cartItems');
    let cartItems = cartItemsString
      ? (JSON.parse(cartItemsString) as number[])
      : [];

    if (cartItems.length > 0) {
      this.mapCartItems(cartItems);
      console.log(cartItems);
    }
  }

  mapCartItems(productIds: number[]) {
    const allProducts = ProductSource.products;
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
      this.cartItems.push(cartItem);
    }
  }
}
