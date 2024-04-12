import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css',
})
export class MenuBarComponent {
  color: string = 'red';
  categories!: string[];
  selectedCategory!: string;

  @Output() onSelect!: EventEmitter<string>;

  constructor() {
    this.onSelect = new EventEmitter();
  }

  ngOnInit() {
    this.categories = ['Electronics', 'Health', 'Accessories', 'Clothing'];
  }

  getStyle() {
    return {
      'background-color': 'red',
    };
  }

  handleMenuClick(value: string) {
    this.selectedCategory = value;
    this.onSelect.emit(value);
  }
}
