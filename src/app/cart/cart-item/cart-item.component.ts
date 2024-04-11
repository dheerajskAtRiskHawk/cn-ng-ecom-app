import { Component, Input } from '@angular/core';
import { CartItemModel } from '../cart-item.model';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  @Input() item!: CartItemModel;
}
