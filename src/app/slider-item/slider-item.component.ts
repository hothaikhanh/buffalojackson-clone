import { Component, Input, OnInit } from '@angular/core';

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

  starsCount: number = this.ratings;
  starSet = "";
  renderStars() {
    for (let i = 0; this.starsCount >= 1; this.starsCount--) {

      this.starSet += `<div class="items-slider__star star--full"></div>`;
    }
    if (this.starsCount > 0) {
      this.starSet += `<div class="items-slider__star star--half"></div>`;
    }
  }

  ngOnInit(): void {
    this.renderStars()
  }
}
