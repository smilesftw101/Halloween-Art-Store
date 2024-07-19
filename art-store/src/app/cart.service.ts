import { Injectable } from '@angular/core';

import { Painting } from './paintings';

//fetches data & interacts with external APIs and resources
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //stores arrays of current paintings in cart.
  items: Painting[] = [];

  addToCart(painting: Painting) {
    this.items.push(painting);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  constructor(
    private http: HttpClient
  ) { }
}
