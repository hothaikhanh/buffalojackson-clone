import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import data from "src/ITEMS.json"



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  cartStatus: boolean
  cartItems: any
  totalCost: number
  menuItems: any


  ngOnInit(): void {
    this.cartService.cartStatusSubject.subscribe(c => {
      this.cartStatus = c;
    })

    this.cartService.cartItemsSubject.subscribe(c => {
      this.cartItems = c;
    })

    this.cartService.totalCostSubject.subscribe(c => {
      this.totalCost = c;
    })

    this.cartService.menuItemsSubject.subscribe(c => {
      this.menuItems = c;
    })
  }



  hideCart() {
    this.cartService.hideCart()
  }

  removeItem(id: string) {
    this.cartService.removeItem(id)
  }

  addQuantity(id: string) {
    this.cartService.addQuantity(id)
  }

  subtractQuantity(id: string) {
    this.cartService.subtractQuantity(id)

  }
}
