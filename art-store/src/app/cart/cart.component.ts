import { Component } from '@angular/core';

//needed to display paintings added to cart
import { CartService } from '../cart.service';

//form for user input
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  //defines item property, stores products in carts, from cart.service.ts
  items = this.cartService.getItems();

  //sum of total paintings in cart
  get total(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();

    window.alert('Thank you, your order has been submitted');
  }

}
