import { Component, Input } from '@angular/core';
import { CartItemModel } from '../cart-item.model';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  @Input() item!: CartItemModel;
}
