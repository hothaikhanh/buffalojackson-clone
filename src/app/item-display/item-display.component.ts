import { Component, Input, OnInit } from '@angular/core';
import data from "src/ITEMS.json"


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

  itemsList: any = [];

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

}
