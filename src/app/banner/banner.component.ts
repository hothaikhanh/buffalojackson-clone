import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input()
  pictureURL: string = '';

  @Input()
  title: string = '';

  @Input()
  description: string = '';

  @Input()
  type: any = '';
}
