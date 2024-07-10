import { Component, Input } from '@angular/core';
import { OrderSummaryModel } from '../cart/order-summary.model';

@Component({
  selector: 'order-summary',
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css',
})
export class OrderSummaryComponent {
  @Input() summary!: OrderSummaryModel;
}
