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
  errorMessage!: string;

  constructor(private cartService: CartService) {}

  ngOnChanges() {
    this.item.totalPrice = this.item.quantity * this.item.price;
  }

  decreaseQuantity() {
    this.item.quantity -= 1;
    this.updateToServer();
  }

  increaseQuantity() {
    this.item.quantity += 1;
    this.updateToServer();
  }

  updateToServer() {
    this.cartService.update(this.item.id, this.item.quantity).subscribe(
      // Value callback
      (res) => {
        this.item.totalPrice = this.item.quantity * this.item.price;
        this.errorMessage = '';
        this.cartService.setCartSubject(this.item);
      },
      // Error callback
      (errorResponse) => {
        console.log(errorResponse);
        this.errorMessage = errorResponse.error;
      }
    );
  }
}
