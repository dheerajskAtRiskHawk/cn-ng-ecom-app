import { Component } from '@angular/core';
import { CartItemModel } from '../cart-item.model';
import * as ProductSource from '../../../assets/products.json';
import { ProductModel } from '../../home/models/product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(private cartService: CartService) {}

  cartItems: CartItemModel[] = [];

  ngOnInit() {
    const items = this.cartService.get();
    if (items.length > 0) {
      // this.cartItems = this.cartService.mapCartItems(items);
      console.log(this.cartItems);
    }
  }
}
