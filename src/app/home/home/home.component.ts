import { Component } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { HomeService } from './home.service';
import { ProductService } from '../../shared/product.service';
import { CartService } from '../../cart/cart.service';

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
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.productService.get().subscribe((res) => {
      this.products = res as ProductModel[];
      this.cartService.getAllItems().subscribe((res) => {
        const resArray = res as any[];
        this.products = this.products.map((p) => {
          const updatedProduct = { ...p };
          if (resArray.find((c) => c.productID == updatedProduct.id)) {
            updatedProduct.isAddedInCart = true;
          }
          return updatedProduct;
        });
      });
    });
  }

  handleRemoveFromCartEvent(productId: string) {
    this.cartService.delete(Number(productId)).subscribe((res) => {
      this.cartItemsCount--;
    });
  }

  handleAddToCartEvent(productId: string) {
    this.cartService.add(Number(productId)).subscribe((res) => {
      console.log(res);
      this.cartItemsCount++;
    });
  }

  handleMenuSelect(category: any) {
    this.productService.get().subscribe((res) => {
      this.products = (res as ProductModel[]).filter(
        (p) => p.category == category
      );
    });
  }
}
