import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
  constructor() {}

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
}
