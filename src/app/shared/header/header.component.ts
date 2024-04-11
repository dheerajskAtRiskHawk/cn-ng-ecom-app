import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  fontSize = 24;
  @Input() cartItemsCount: number = 0;

  constructor(private router: Router) {}

  handleCartCounterClick() {
    this.router.navigateByUrl('cart');
  }
}
