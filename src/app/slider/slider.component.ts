import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import data from "src/ITEMS.json"

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() slider_title: string = "";
  @Input() items: any;

  @ViewChild('itemsContainer') itemsContainer: ElementRef;
  @ViewChild('sliderContainer') sliderContainer: ElementRef;

  itemsList: any = [];

  showNav: boolean = true;
  sliderEnd: boolean = false

  getItemsList() {
    for (let i = 0; i < data.length; i++) {
      if (this.items.includes(data[i].ID)) {
        this.itemsList.push(data[i])
      }
    }
  }

  moveLeft() {
    this.sliderEnd = false
    this.itemsContainer.nativeElement.style.transform = "translateX(0px)";
  }

  moveRight() {
    this.sliderEnd = true
    this.itemsContainer.nativeElement.style.transform = "translateX(" + (this.sliderContainer.nativeElement.clientWidth - this.itemsContainer.nativeElement.clientWidth) + "px)";
  }

  ngOnInit(): void {
    this.getItemsList()
  }

}
