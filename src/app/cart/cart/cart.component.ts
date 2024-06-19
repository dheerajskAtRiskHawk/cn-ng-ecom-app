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
    this.cartService.getAllItems().subscribe((res) => {
      const cartItemsArray = res as any[];
      cartItemsArray.forEach((cartItem) => {
        let newCartItem = new CartItemModel();
        newCartItem.id = cartItem.id;
        newCartItem.imageUrl = cartItem.product.imageUrl;
        newCartItem.name = cartItem.product.name;
        newCartItem.price = cartItem.product.price;
        newCartItem.quantity = cartItem.quantity;
        this.cartItems.push(newCartItem);
      });
    });
  }
}
