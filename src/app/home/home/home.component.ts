import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductModel } from '../models/product.model';
import * as ProductSource from '../../../assets/products.json';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  products: ProductModel[] = [];
  cartItemsCount: number = 0;

  ngOnInit() {
    console.log(ProductSource.products);
    this.products = ProductSource.products;
  }

  handleRemoveFromCartEvent(productId: string) {
    this.cartItemsCount--;
  }

  handleAddToCartEvent(productId: string) {
    this.cartItemsCount++;
    console.log('Ok, I will add it to the cart', productId);
  }
}
