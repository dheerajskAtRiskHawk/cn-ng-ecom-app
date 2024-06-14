import { Component } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { HomeService } from './home.service';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [HomeService],
})
export class HomeComponent {
  products: ProductModel[] = [];
  cartItemsCount: number = 0;

  constructor(
    private homeService: HomeService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productService.get().subscribe((res) => {
      this.products = res as ProductModel[];
    });
  }

  handleRemoveFromCartEvent(productId: string) {
    this.cartItemsCount--;
    this.homeService.updateCartItems(Number(productId), 'remove');
  }

  handleAddToCartEvent(productId: string) {
    this.cartItemsCount++;
    this.homeService.updateCartItems(Number(productId), 'add');
    console.log('Ok, I will add it to the cart', productId);
  }

  handleMenuSelect(category: any) {
    this.productService.get().subscribe((res) => {
      this.products = (res as ProductModel[]).filter(
        (p) => p.category == category
      );
    });
  }
}
