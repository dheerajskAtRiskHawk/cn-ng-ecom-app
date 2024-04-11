import { Component } from '@angular/core';
import { CartItemModel } from '../cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartItems!: CartItemModel[];

  ngOnInit() {
    const cartItemsString = localStorage.getItem('cartItems');
    let cartItems = cartItemsString
      ? (JSON.parse(cartItemsString) as number[])
      : [];

    if (cartItems.length > 0) {
      console.log(cartItems);
    }
  }
}
