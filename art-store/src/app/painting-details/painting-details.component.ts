import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Painting, paintings } from '../paintings';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-painting-details',
  templateUrl: './painting-details.component.html',
  styleUrl: './painting-details.component.css'
})
export class PaintingDetailsComponent implements OnInit {

  paintings = [...paintings];

  share() {
    window.alert('The art has been shared!')
  }

  onNotify(){
    window.alert('You will be notified when the art goes on sale!')
  }

  

  addToCart(painting: Painting) {
    this.cartService.addToCart(painting);
    window.alert('Your painting has been added to the cart!');
  }

  ngOnInit() {
    // First get the painting id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const paintingIdFromRoute = Number(routeParams.get('paintingId'));
  
    // Find the painting that correspond with the id provided in route.
    this.painting = paintings.find(painting => painting.id === paintingIdFromRoute);
  }

  painting: Painting | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

}
