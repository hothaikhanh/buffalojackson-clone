import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  status: BehaviorSubject<boolean>;
  cartStatus: boolean = false;

  items: BehaviorSubject<any>;
  cartItems = new Set;

  price: BehaviorSubject<number>;
  totalPrice = 0;



  constructor() {
    this.status = new BehaviorSubject(this.cartStatus);
    this.items = new BehaviorSubject(this.cartItems);
    this.price = new BehaviorSubject(this.totalPrice);

    this.cartItems.add("0001")
  }

  showCart() {
    this.status.next(true);
  }

  hideCart() {
    this.status.next(false);
  }

  addItem(id: string) {
    this.items.next(this.cartItems.add(id))
  }

  removeItem(id: string) {
    this.items.next(this.cartItems.delete(id))
  }

  calculateTotal(itemsList: any) {
    for (let i = 0; i < itemsList.length; i++) {
      this.totalPrice += itemsList[i].price_current
    }
  }

}
