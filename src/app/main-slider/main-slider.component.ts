import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss'],
})
export class MainSliderComponent implements OnInit {
  slidersCount: number = 4;
  sliders: number[] = Array.from(Array(this.slidersCount).keys());
  blur: boolean = false;
  blurTimer: number = 1500

  ngOnInit() {
    this.playTransition();
  }

  nextSlideTimer = setInterval(() => {
    this.toNextSlide();
  }, 8000);


  toNextSlide() { this.playTransition(); }

  toPrevSlide() { this.playTransition(); }

  playTransition() {
    this.blur = true;
    setTimeout(() => {
      this.blur = false;
    }, this.blurTimer);
  }
}
