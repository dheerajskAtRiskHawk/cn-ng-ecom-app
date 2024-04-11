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

  ngOnInit() {
    console.log(ProductSource.products);
    this.products = ProductSource.products;
  }

  handleAddToCartEvent(productId: string) {
    console.log('Ok, I will add it to the cart', productId);
  }
}
