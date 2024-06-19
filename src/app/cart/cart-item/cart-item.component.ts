import { Component, Input } from '@angular/core';
import { CartItemModel } from '../cart-item.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  @Input() item!: CartItemModel;

  constructor(private cartService: CartService) {}

  decreaseQuantity() {
    this.item.quantity -= 1;
    this.updateToServer();
  }

  increaseQuantity() {
    this.item.quantity += 1;
    this.updateToServer();
  }

  updateToServer() {
    this.cartService
      .update(this.item.id, this.item.quantity)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
