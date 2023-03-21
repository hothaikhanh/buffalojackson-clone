import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  emailFocus: boolean = false

  @ViewChild('input') input: ElementRef;

  focusEmail() {
    this.emailFocus = true
  }

  blurEmail() {
    if (this.input.nativeElement.value == "") {
      this.emailFocus = false
    }

  }



}
