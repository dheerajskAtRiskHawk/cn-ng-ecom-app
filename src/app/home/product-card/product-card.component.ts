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
  @Output() onRemoveFromCart: EventEmitter<any>;

  cartBtnText = 'Add to Cart';

  constructor() {
    this.onAddToCart = new EventEmitter();
    this.onRemoveFromCart = new EventEmitter();
  }

  ngOnChanges() {
    if (this.product.isAddedInCart) {
      this.cartBtnText = 'Remove from Cart';
    }
  }

  handleCartEvent() {
    if (!this.product.isAddedInCart) {
      this.product.isAddedInCart = true;
      this.onAddToCart.emit(this.product.id);
      this.cartBtnText = 'Remove from Cart';
    } else {
      this.onRemoveFromCart.emit(this.product.id);
      this.product.isAddedInCart = false;
      this.cartBtnText = 'Add to Cart';
    }
  }
}
// Home-> Header-> Cart> Button
