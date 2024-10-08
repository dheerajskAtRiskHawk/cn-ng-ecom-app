import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartService } from './cart.service';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
@NgModule({
  declarations: [CartComponent, CartItemComponent, OrderSummaryComponent],
  imports: [CommonModule, SharedModule, CartRoutingModule],
  exports: [CartComponent],
  providers: [],
})
export class CartModule {}
