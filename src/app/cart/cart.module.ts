import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './cart/cart-routing.module';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, SharedModule, CartRoutingModule],
  exports: [CartComponent],
})
export class CartModule {}
