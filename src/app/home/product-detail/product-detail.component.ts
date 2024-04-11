import { Component } from '@angular/core';
import * as ProductSource from '../../../assets/products.json';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../models/product.model';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  product!: ProductModel;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const products = ProductSource.products;
    console.log(products);
    this.route.paramMap.subscribe((params) => {
      const productId = params.get('id');
      console.log(productId);
      const productFound = products.find((i) => i.id == Number(productId));
      if (productFound) {
        this.product = productFound;
      }
      console.log(this.product);
    });
  }
}
