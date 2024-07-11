import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  fontSize = 24;
  @Input() cartItemsCount: number = 0;

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getAllItems().subscribe((res) => {
      this.cartItemsCount = res.length;
    });
  }

  handleCartCounterClick() {
    this.router.navigateByUrl('cart');
  }
}
