import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';


@Component({
  selector: 'app-header-top-right',
  templateUrl: './header-top-right.component.html',
  styleUrls: ['./header-top-right.component.scss']
})
export class HeaderTopRightComponent implements OnInit {

  constructor(private cartService: CartService) { }

  cartStatus: boolean
  cartItems: any


  ngOnInit(): void {
    this.cartService.status.subscribe(c => {
      this.cartStatus = c;
    });

    this.cartService.items.subscribe(c => {
      this.cartItems = c;
    })
  }

  toggleCart() {
    this.cartService.showCart()
  }

}
