import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input('item') product!: ProductModel;
  @Output() onAddToCart!: EventEmitter<any>;

  cartBtnText = 'Add to Cart';
  isAddedInCart: boolean = false;

  constructor() {
    this.onAddToCart = new EventEmitter();
  }

  handleCartEvent() {
    if (!this.isAddedInCart) {
      this.isAddedInCart = true;
      this.cartBtnText = 'Remove from Cart';
    } else {
      this.isAddedInCart = false;
      this.cartBtnText = 'Add to Cart';
    }
    this.onAddToCart.emit(this.product.id);
  }
}
// Home-> Header-> Cart> Button
