import { Component } from '@angular/core';
import { CartItemModel } from '../cart-item.model';
import * as ProductSource from '../../../assets/products.json';
import { ProductModel } from '../../home/models/product.model';
import { CartService } from '../cart.service';
import { OrderService } from '../order.service';
import { OrderSummaryModel } from './order-summary.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  subscription!: Subscription;
  subscriptions: Subscription[] = [];

  constructor(
    private cartService: CartService,
    private orderService: OrderService
  ) {}

  cartItems: CartItemModel[] = [];
  orderSummary!: OrderSummaryModel;

  ngOnInit() {
    this.subscriptions.push(
      this.cartService.getAllItems().subscribe((res) => {
        this.cartItems = res;
      })
    );
    // this.getOrderSummary();
    this.subscriptions.push(
      this.cartService.getCartSubject().subscribe((nextValue) => {
        console.log('Data Received');
        this.getOrderSummary();
      })
    );
  }

  getOrderSummary() {
    this.orderService.getOrderSummary().subscribe((res) => {
      this.orderSummary = res as OrderSummaryModel;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
