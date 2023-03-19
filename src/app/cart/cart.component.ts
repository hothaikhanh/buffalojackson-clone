import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CartService } from '../cart.service';
import data from "src/ITEMS.json"



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnChanges {

  constructor(private cartService: CartService) { }

  cartStatus: boolean
  cartItems: any
  totalPrice: number


  itemsList: any = [];

  getItemsList() {
    for (let i = 0; i < data.length; i++) {
      if (this.cartItems.has(data[i].ID)) {
        this.itemsList.push(data[i])
      }
    }
  }

  ngOnInit(): void {
    this.cartService.status.subscribe(c => {
      this.cartStatus = c;
    })

    this.cartService.items.subscribe(c => {
      this.cartItems = c;
    })

    this.cartService.price.subscribe(c => {
      this.totalPrice = c;
    })

    this.getItemsList()
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  hideCart() {
    this.cartService.hideCart()
  }

  removeItem(id: string) {
    this.cartService.removeItem(id)
  }

}
