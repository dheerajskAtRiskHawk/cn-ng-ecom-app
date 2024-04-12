import { Component } from '@angular/core';
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
    this.updateCartItems(Number(productId), 'remove');
  }

  handleAddToCartEvent(productId: string) {
    this.cartItemsCount++;
    this.updateCartItems(Number(productId), 'add');
    console.log('Ok, I will add it to the cart', productId);
  }

  updateCartItems(id: number, event: string) {
    const existingItemsString = localStorage.getItem('cartItems');
    let existingItems = existingItemsString
      ? (JSON.parse(existingItemsString) as number[])
      : [];
    if (event == 'add') {
      existingItems.push(id);
    } else {
      existingItems = existingItems.filter((i) => i != id);
    }
    localStorage.setItem('cartItems', JSON.stringify(existingItems));
  }

  handleMenuSelect(category: any) {
    this.products = ProductSource.products.filter(
      (p) => p.category == category
    );
  }
}
