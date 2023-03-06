import { Component, Input, OnInit } from '@angular/core';
import data from "src/ITEMS.json"

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {



  @Input() slider_title: string = "";
  @Input() items: any;

  itemsList: any = [];

  getItemsList() {
    for (let i = 0; i < data.length; i++) {
      if (this.items.includes(data[i].ID)) {
        this.itemsList.push(data[i])
      }
    }
    console.log(this.itemsList);

  }

  ngOnInit(): void {
    this.getItemsList()
  }



}
