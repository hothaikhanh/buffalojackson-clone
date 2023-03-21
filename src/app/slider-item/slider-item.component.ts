import {
  Component, Input, OnChanges,
  SimpleChanges, OnInit
} from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.scss']
})
export class SliderItemComponent implements OnInit {
  @Input() link: string = ''
  @Input() picture: string = ''
  @Input() name: string = ""
  @Input() price_old?: number
  @Input() price_current: number = 0
  @Input() ratings: number = 0
  @Input() ID: string = ""

  constructor(private cartService: CartService) { }

  stars = {
    half: false,
    count: [0]
  }

  ngOnInit(): void {
    this.stars = {
      half: !Number.isInteger(this.ratings),
      count: Array(Math.floor(this.ratings))
    }
  }

  addToCart(ID: string) {
    this.cartService.addItem(ID)
    console.log(`item with id: ${ID} has been added`);

  }
}
