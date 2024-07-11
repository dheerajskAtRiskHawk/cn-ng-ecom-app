import { Component } from '@angular/core';
import { CartItemModel } from '../cart-item.model';
import * as ProductSource from '../../../assets/products.json';
import { ProductModel } from '../../home/models/product.model';
import { CartService } from '../cart.service';
import { OrderService } from '../order.service';
import { OrderSummaryModel } from './order-summary.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(
    private cartService: CartService,
    private orderService: OrderService
  ) {}

  cartItems: CartItemModel[] = [];
  orderSummary!: OrderSummaryModel;

  ngOnInit() {
    this.cartService.getAllItems().subscribe((res) => {
      this.cartItems = res;
    });
    // this.getOrderSummary();
    this.cartService.getCartSubject().subscribe((nextValue) => {
      console.log('Data Received');
      this.getOrderSummary();
    });
  }

  getOrderSummary() {
    this.orderService.getOrderSummary().subscribe((res) => {
      this.orderSummary = res as OrderSummaryModel;
    });
  }
}
