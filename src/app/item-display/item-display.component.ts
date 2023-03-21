import { Component, Input, OnInit } from '@angular/core';
import data from "src/ITEMS.json"
import { CartService } from '../cart.service';


@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.scss']
})
export class ItemDisplayComponent implements OnInit {
  @Input()
  pictureURL: string = ""

  @Input()
  title: string = ""

  @Input()
  description: string = ""

  @Input()
  items: any

  @Input()
  ID: any

  itemsList: any = [];

  constructor(private cartService: CartService) { }

  getItemsList() {
    for (let i = 0; i < data.length; i++) {
      if (this.items.includes(data[i].ID)) {
        this.itemsList.push(data[i])
      }
    }
  }

  ngOnInit(): void {
    this.getItemsList()
  }

  addToCart(ID: string) {
    this.cartService.addItem(ID)
    console.log(`item with id: ${ID} has been added`);

  }

}
