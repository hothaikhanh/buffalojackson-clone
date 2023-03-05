import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss'],
})
export class MainSliderComponent implements OnInit {
  slidersLength: number = 4;
  sliderDuration: number = 8000

  blur: boolean = false;
  curSlider: any[] = Array.from(Array(this.slidersLength).keys());

  ngOnInit() {
    this.playTransition();
  }


  setSlideTimer = setInterval(() => {
    this.playTransition();
    this.curSlider.push(this.curSlider.shift())
  }, this.sliderDuration);

  toNextSlide() {
    clearInterval(this.setSlideTimer)

    this.playTransition();
    this.curSlider.push(this.curSlider.shift())

    this.setSlideTimer = setInterval(() => {
      this.playTransition();
      this.curSlider.push(this.curSlider.shift())
    }, this.sliderDuration);

  }

  toPrevSlide() {
    clearInterval(this.setSlideTimer)

    this.playTransition();
    this.curSlider.unshift(this.curSlider.pop())

    this.setSlideTimer = setInterval(() => {
      this.playTransition();
      this.curSlider.push(this.curSlider.shift())
    }, this.sliderDuration);

  }

  playTransition() {
    this.blur = false;
    setTimeout(() => {
      this.blur = true;
    }, 10);
  }
}
