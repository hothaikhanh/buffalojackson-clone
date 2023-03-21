import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import data from "src/ITEMS.json"


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartStatusSubject: BehaviorSubject<boolean>;
  cartStatus: boolean = false;

  cartItemsSubject: BehaviorSubject<any>;
  cartItems = new Set;

  menuItemsSubject: BehaviorSubject<any>;
  menuItems: any = []

  totalCostSubject: BehaviorSubject<number>;
  totalCost: number = 0;

  constructor() {
    this.cartStatusSubject = new BehaviorSubject(this.cartStatus);
    this.cartItemsSubject = new BehaviorSubject(this.cartItems);
    this.menuItemsSubject = new BehaviorSubject(this.menuItems);
    this.totalCostSubject = new BehaviorSubject(this.totalCost);

  }

  showCart() {
    this.cartStatusSubject.next(true);
  }

  hideCart() {
    this.cartStatusSubject.next(false);
  }

  addItem(itemId: string) {
    if (!this.cartItems.has(itemId)) {
      let newItem: any = data.filter(obj => { return obj.ID == itemId })
      this.menuItems.push(newItem[0])
      newItem[0].quantity = 1
      newItem[0].cost = this.setCost(newItem[0])
    }

    this.setTotalCost()
    this.menuItemsSubject.next(this.menuItems)

    this.cartItems.add(itemId)
    this.cartItemsSubject.next(this.cartItems)
  }

  removeItem(itemId: string) {

    for (let i = 0; i < this.menuItems.length; i++) {
      if (this.menuItems[i].ID == itemId) {
        this.menuItems.splice(i, 1)
      }
    }

    this.setTotalCost()
    this.menuItemsSubject.next(this.menuItems)

    this.cartItems.delete(itemId)
    this.cartItemsSubject.next(this.cartItems)
  }

  addQuantity(itemId: string) {
    let i = this.menuItems.findIndex((x: any) => x.ID == itemId)
    this.menuItems[i].quantity++
    this.menuItems[i].cost = this.setCost(this.menuItems[i])
    this.setTotalCost()
  }

  subtractQuantity(itemId: string) {
    let i = this.menuItems.findIndex((x: any) => x.ID == itemId)
    this.menuItems[i].quantity--
    this.menuItems[i].cost = this.setCost(this.menuItems[i])
    this.setTotalCost()


    if (this.menuItems[i].quantity == 0) {
      this.removeItem(itemId)
    }
  }

  setCost(item: any) {
    let cost = item.price_current * item.quantity
    return (Number(cost.toFixed(2)))
  }

  setTotalCost() {
    let sum: number = 0
    for (let i = 0; i < this.menuItems.length; i++) {
      sum += this.menuItems[i].cost
    }
    console.log(typeof sum);
    this.totalCostSubject.next(Number(sum.toFixed(2)))
  }

}
